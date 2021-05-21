fc = {
    pages: [],

    attPalette: function() {
        divCategorias = document.getElementById('category');
        for (let model of Object.keys(modelos)) {
            let li = document.createElement('li');
            li.classList.add("list-button-line");
            if (Object.keys(modelos)[0] == model){
                li.innerHTML = `<button class='pallete-button active' onclick='fc.attPaletteComponents(\"${model}\")'>${model}</button>`;
            } else {
                li.innerHTML = `<button class='pallete-button' onclick='fc.attPaletteComponents(\"${model}\")'>${model}</button>`;
            }
            divCategorias.querySelector("ul").appendChild(li);
        };
    },

    attPaletteComponents: function(modelActived) {
        divCComponents = document.getElementById('c-components');
        divCComponents.querySelector("ul").innerHTML = "";
        for (let cCont = 0; cCont < modelos[modelActived].length; cCont++) {
            let li = document.createElement('li');
            li.classList.add("list-button-line");
            li.innerHTML = `<button class='component-button'>${Object.keys(modelos[modelActived][cCont])}</button>`
            divCComponents.querySelector("ul").appendChild(li);
        }
    },

    attPages: function(tempJson) {
        this.pages = [];
        for (page of tempJson.appCode.pages) {
            this.pages.push(page.href);
        }; 
        divPages = document.getElementById('pages');
        divPages.querySelector("ul").innerHTML = '';
        for (page of this.pages) {
            let li = document.createElement('li');
            if (page == pages[0]) {
                li.innerHTML = `<button class='page-select active'>${page.slice(0, page.length-5)}</button>`;
            } else {
                li.innerHTML = `<button class='page-select'>${page.slice(0, page.length-5)}</button>`;
            }
            divPages.querySelector("ul").appendChild(li);
        }
    },

    recursivityComponents: function(recursivityJson) {
        if (typeof recursivityJson.content == "object") {
            if (recursivityJson.content.length > 1) {
                let dl = '<dl></dl>';
                for (recursivityC in recursivityJson.content) {

                };
            } else {
                return `<dt>${Object.keys(recursivityJson.content[0])}</dt>`;
            };
        };
        return
    },

    attComponents: function(tempJson, page) {
        let divComponents = document.getElementById('components');
        let appCodePages = tempJson.appCode.pages;
        for (pageAccess of appCodePages) {
            if (pageAccess.href == page) {
                divComponents.innerHTML = '';
                let dl = document.createElement('dl');
                dl.classList.add("components-list");
                for (firstsItensComponents of pageAccess.pageComponents) {
                    let dt = document.createElement('dt');
                    dt.classList.add("component");
                    dt.innerText  = Object.keys(firstsItensComponents)[0];
                    dl.appendChild(dt);
                }
                dd = document.createElement('dd');
                dd.innerHTML = `<dl></dl>`;
                dl.appendChild(dd);
                divComponents.appendChild(dl);
                // for (itemComponent of Object.keys(pageAccess.pageComponents)) {
                //     console.log(itemComponent);
                // };
            };
        }; 
    },

    verifyJson: function(dadosNext) {
        let tempHTML = '';
        for (dado of dadosNext) {
            if (Object.keys(dado).length > 0) {
                for (chave of Object.keys(dado)) {
                    tempHTML = tempHTML + fc.recursivityJson(chave, dado[chave]);
                }
            }
        };
        return tempHTML;
    },

    recursivityJson: function(chave, dados) {
        if (Object.keys(dados).indexOf("property") > -1) {
            let propsHTML = '';
            for (propName of Object.keys(dados.property)) {
                if (propName == 'style') {

                } else {
                    propsHTML = propsHTML + ` ${propName}='${dados.property[propName]}'`;
                };
            };
            if (typeof dados.content == "object") {
                return `<${dados.html}${propsHTML}>${fc.verifyJson(dados.content)}</${dados.html}>\n`;
            } else {
                return `<${dados.html}${propsHTML}>${dados.content}</${dados.html}>\n`;
            };
        } else {
            if (typeof dados.content == "object") {
                return `<${dados.html}>${fc.verifyJson(dados.content)}</${dados.html}>\n`;
            } else {
                return `<${dados.html}>${dados.content}</${dados.html}>\n`
            };
        };
    },
    
    jsonToHtml: function(tempJson, page) {
        let html = `<html><head><title>${tempJson.title}</title></head><body>`;
        for (pageHTML of tempJson.appCode.pages) {
            console.log(pageHTML);
            if (pageHTML.href == page) {
                for (component of pageHTML.pageComponents) {
                    html = html + fc.recursivityJson(Object.keys(component), component[Object.keys(component)]);
                }
            }
        }
        html = html + '</body></html>'
        return html;
    },
}

fc.attPalette();
fc.attPaletteComponents("Comum")
fc.attPages(tempJson2);
fc.attComponents(tempJson2, 'index.html');

document.getElementById('viewer').srcdoc = fc.jsonToHtml(tempJson3, 'index.html');

$('#category > ul > li > button').click(function(){
    $("#category > ul > li > .active").removeClass("active");
    $(this).addClass('active');
});
