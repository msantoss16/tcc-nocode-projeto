const serverURL = 'http://localhost:3000/';
const token = {headers: {'Authorization': ('Bearer '+Cookies.get('token'))}};
var pageSelected = "";

const cssEditor = CodeMirror(document.querySelector("#css-code"), {
    lineNumbers: true, 
    tabSize: 4, 
    mode: 'css' 
});


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
    let css = cssEditor.getValue();
    for (pageIndex in tempJson.appCode.pages) {
        if (pageSelected == tempJson.appCode.pages[pageIndex].href) {
            tempJson.appCode.pages[pageIndex].css = css;
        }
    };
};

function pageSelect(select, isFirst=false) {
    if (!isFirst) { 
        salvarTemp();
    }
    pageSelected = select.value;
    document.getElementById('js-button').setAttribute('onclick', `window.location.replace("blocklyjs.html?projeto=${getUrlParameter('projeto')}&page=${pageSelected}");`);
    let cssY = false;
    for (pageIndex in tempJson.appCode.pages) {
        if (pageSelected == tempJson.appCode.pages[pageIndex].href) {
            if (Object.keys(tempJson.appCode.pages[pageIndex]).indexOf('css')>-1) {
                cssEditor.setValue(tempJson.appCode.pages[pageIndex].css);
                cssY = true;
            }
        }           
    }
    if (!cssY) {
        cssEditor.setValue('');
    }
    salvarTemp();
};

axios.get(`${serverURL}projects//${getUrlParameter('projeto')}`, token)
    .then(response => {
        console.log(response.data);
        tempJson = response.data;
        let pageOptions = '';
        for (let page of tempJson.appCode.pages) {
            if (page.href == getUrlParameter('page')    ) {
                pageOptions = pageOptions + `<option value="${page.href}" selected>${page.href.substr(0, (page.href.length-5))}</option>`;
                pageSelected = page.href;
            } else {
                pageOptions = pageOptions + `<option value="${page.href}">${page.href.substr(0, (page.href.length-5))}</option>`
            };
        };
        pageSelected = getUrlParameter('page'); 
        document.getElementById('pages').innerHTML = pageOptions;
        pageSelect(document.getElementById('pages'), true);
    })

function salvar() {
    salvarTemp();
    axios.put(`${serverURL}projects/${getUrlParameter('projeto')}`, tempJson, token)
        .then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        });
}