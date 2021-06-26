from flask import Flask, jsonify, request, send_from_directory
import requests
from threading import Thread
import os
import shutil


app = Flask(__name__)

app.config['UPLOAD_FOLDER']='usersContent'

def verifyJson(dadosNext):
    tempHTML = ''
    if (len(list(dadosNext)) > 0):
        for dado in dadosNext:
            tempHTML = tempHTML + recursivityJson(dado)
    return tempHTML
    

def recursivityJson(dados):
    dadosK = list(dados.keys())[0]
    if "property" in list(dados[dadosK]):
        propsHTML = ''
        styleProps = 'style=\"'
        for propName in list(dados[dadosK]['property']):
            propsHTML = propsHTML + ' {}=\'{}\''.format(propName, dados[dadosK]['property'][propName])
        if "style" in list(dados[dadosK]): 
            try:
                for styleName in list(dados[dadosK]['style']):
                    styleProps = styleProps + '{}: {};'.format(styleName, dados[dadosK]['style'][styleName])
                styleProps = styleProps + '\"'
            except:
                pass
            if type(dados[dadosK]['content']) in [list, dict]:
                return "<{} {} {} componentId={}>{}</{}>".format(dados[dadosK]['html'], styleProps, propsHTML, dados[dadosK]['id'], verifyJson(dados[dadosK]['content']), dados[dadosK]['html'])
            else:
                return "<{} {} {} componentId={}>{}</{}>".format(dados[dadosK]['html'], styleProps, propsHTML, dados[dadosK]['id'], dados[dadosK]['content'], dados[dadosK]['html'])
        else:
            if (type(dados[dadosK]['content']) in [list, dict]):
                return "<{} {} componentId={}>{}</{}>".format(dados[dadosK]['html'], propsHTML, dados[dadosK]['id'], verifyJson(dados[dadosK]['content']), dados[dadosK]['html'])
            else:
                return "<{} {} componentId={}>{}</{}>".format(dados[dadosK]['html'], propsHTML, dados[dadosK]['id'], dados[dadosK]['content'], dados[dadosK]['html'])
    else:
        if "style" in list(dados[dadosK]):
            styleProps = "style=\""
            try:
                for styleName in list(dados[dadosK]['style']):
                    styleProps = styleProps + '{}: {};'.format(styleName, dados[dadosK]['style'][styleName])
                styleProps = styleProps + '\"'
            except:
                pass 
            if type(dados[dadosK]['content']) in [list, dict]:
                return "<{} {} componentId={}>{}</{}>".format(dados[dadosK]['html'], styleProps, dados[dadosK]['id'], verifyJson(dados[dadosK]['content']), dados[dadosK]['html'])
            else:
                return "<{} {} componentId={}>{}</{}>".format(dados[dadosK]['html'], styleProps, dados[dadosK]['id'], dados[dadosK]['content'], dados[dadosK]['html'])
        else:
            if type(dados[dadosK]['content']) in [list, dict]:
                return "<{} componentId={}>{}</{}>\n".format(dados[dadosK]['html'], dados[dadosK]['id'], verifyJson(dados[dadosK]['content']), dados[dadosK]['html'])
            else:
                return "<{} componentId={}>{}</{}>\n".format(dados[dadosK]['html'], dados[dadosK]['id'], dados[dadosK]['content'], dados[dadosK]['html'])
    return ''

def verifyJs(dPage):
    if ('js' in list(dPage)):
        return dPage['js']

def verifyCss(dPage):
    if ('css' in list(dPage)):
        return dPage['css']

def gerarExe(req):
    if os.path.exists('usersContent/{}'.format(req['user']['_id'])):
        contentE = os.path.join(app.root_path, r'usersContent\{}'.format(req['user']["_id"]))
        shutil.rmtree(contentE)
    if not os.path.exists('usersContent/{}'.format(req['user']["_id"])):
        os.makedirs('usersContent/{}'.format(req['user']["_id"]))
        if not os.path.exists('usersContent/{}/content'.format(req['user']["_id"])):
            os.makedirs('usersContent/{}/content'.format(req['user']["_id"]))
        if not os.path.exists('usersContent/{}/exe'.format(req['user']["_id"])):
            os.makedirs('usersContent/{}/exe'.format(req['user']["_id"]))
    for page in req['appCode']['pages']:
        html = ''
        for component in page['pageComponents']:
            html = html + recursivityJson(component)
        with open('usersContent/{}/content/{}'.format(req['user']["_id"], page['href']), 'w+') as f:
            f.write("""<html>
    <head>
        <meta charset="utf-8">
        <style>
        {}
        </style>
    </head>
    <body>
    {}
    </body>
    <script>
    {}
    </script>
</html>""".format(verifyCss(page), html, verifyJs(page)))
    fMain = open("base.js", "r")
    with open('usersContent/{}/content/main.js'.format(req['user']["_id"]), 'w+') as arquivo:
        arquivo.write('page = \"{}\";\n'.format(req['appCode']['pages'][0]['href']))
        arquivo.write(fMain.read())
    if not os.path.exists('usersContent/{}/content/package.json'.format(req['user']["_id"])):
        os.system('cd usersContent/{}/content && npm init -y'.format(req['user']["_id"]))
        os.system('cd usersContent/{}/content && npm install --save-dev electron'.format(req['user']["_id"]))
        os.system('cd usersContent/{}/content && npm install electron-builder --save-dev'.format(req['user']["_id"]))
        os.system('cd usersContent/{}/content && electron-builder'.format(req['user']["_id"]))
        original = os.path.join(app.root_path, r'usersContent\{}\content\dist\content Setup 1.0.0.exe'.format(req['user']["_id"]))
        target = os.path.join(app.root_path, r'usersContent\{}\exe'.format(req['user']["_id"]))
        contentD = os.path.join(app.root_path, r'usersContent\{}\content'.format(req['user']["_id"]))
        print(original)
        print(target)
        shutil.copy2(original, target)
        shutil.rmtree(contentD)
    


@app.route('/download/<path:id>/<path:filename>', methods=['GET', 'POST'])
def download(id, filename):
    full_path = os.path.join(app.root_path, app.config['UPLOAD_FOLDER'], r'{}\exe'.format(id))
    return send_from_directory(full_path, filename)

@app.route('/gExe/', methods=['POST'])
def gerarAPP():
    req_data = request.get_json()
    thread1 = Thread(target = gerarExe, args = (req_data,))
    thread1.start()
    return 'ok'

app.run(debug=True)