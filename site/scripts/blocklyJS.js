var workspace = Blockly.inject('blocklyDiv',
                  {toolbox: document.getElementById('toolbox')});
workspace.addChangeListener(myUpdateFunction);

function myUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    html = hljs.highlightAuto(code).value
    document.getElementById("jsCode").innerHTML = html;
};