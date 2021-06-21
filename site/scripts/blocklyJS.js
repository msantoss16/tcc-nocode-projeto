const serverURL = 'http://localhost:3000/';
const token = {headers: {'Authorization': ('Bearer '+Cookies.get('token'))}};

var pageSelected = "";
axios.get(`${serverURL}projects/60ca8aaaef604a17c0fb67ae`, token)
.then(response => {console.log(response.data)})
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function salvarTemp() {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    let xml_text = Blockly.Xml.domToText(xml);
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    for (pageIndex in tempJson.appCode.pages) {
        if (pageSelected == tempJson.appCode.pages[pageIndex].href) {
            tempJson.appCode.pages[pageIndex].xml = xml_text;
            tempJson.appCode.pages[pageIndex].js = code;
        }
    }
}

function pageSelect(select) {
    pageSelected = select.value;
    let xmlP = false;
    for (pageIndex in tempJson.appCode.pages) {
        if (pageSelected == tempJson.appCode.pages[pageIndex].href) {
            if (Object.keys(tempJson.appCode.pages[pageIndex]).indexOf('xml')>-1) {
                let xml = Blockly.Xml.textToDom(tempJson.appCode.pages[pageIndex].xml);
                Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace)
                xmlP = true;
            }
        }
    }
    if (!xmlP) {
        let xmlC = Blockly.Xml.textToDom(`<xml xmlns=\"https://developers.google.com/blockly/xml\"></xml>`)
        Blockly.Xml.clearWorkspaceAndLoadFromXml(xmlC, workspace)
    }
    salvarTemp();
};

axios.get(`${serverURL}projects/${getUrlParameter('projeto')}`, token)
.then(response => {
    tempJson = response.data;
    console.log(response.data);
    document.getElementById('pages').innerHTML = "";
    let pageOptions = '';
    for (let page of tempJson.appCode.pages) {
        if (page.href == tempJson.appCode.pages[0].href) {
            pageOptions = pageOptions + `<option value="${page.href}" selected>${page.href}</option>`;
            pageSelected = page.href;
        } else {
            pageOptions = pageOptions + `<option value="${page.href}">${page.href}</option>`;
        }
    };
    document.getElementById('pages').innerHTML = pageOptions;
    pageSelect(document.getElementById('pages'));
});

var workspace = Blockly.inject('blocklyDiv',
                  {toolbox: document.getElementById('toolbox')});

workspace.addChangeListener(myUpdateFunction);

function myUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    html = hljs.highlightAuto(code).value
    document.getElementById("jsCode").innerHTML = html;
};

function salvar() {
    salvarTemp()
    axios.put(`${serverURL}projects/${getUrlParameter('projeto')}`, tempJson, token)
        .then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        });
}