fc = {
    pages: [],

    idInJson: function(content, id, edit=false) {
        let returnJson = "";
        for (component of content) {
            if (component[Object.keys(component)].id == id) {
                return component;
            } else {
                if (typeof component[Object.keys(component)].content == "object") {
                    returnJson = fc.idInJson(component[Object.keys(component)].content, id);
                    if (returnJson != "") {
                        return returnJson;
                    }; 
                };
            };
        };
        return "";
    },

    selectComponent: function(id) {
        let component = fc.idInJson([tempJson3.appCode.pages[0].pageComponents[0]], id, false);
        const divProperty = document.getElementById('componentProperty');
        const divStyle = document.getElementById('componentStyle');
        divStyle.innerHTML = "<ul class=\"styleEdit\" id=\"styleEdit\"></ul>";
        divProperty.innerHTML = "<ul class=\"propertyEdit\" id=\"propertyEdit\"></ul>";
        console.log(`Componente selecionado: ${id}`);
        console.log(component);
        console.log(Object.keys(component)[0]);
        if (component != "") {
            let title = document.createElement("h3");
            title.classList.add("component-title");
            console.log(title);
            title.innerText = Object.keys(component)[0];
            divProperty.appendChild(title);
            let id = document.createElement("p");
            id.classList.add("component-ID");
            id.innerText = component[Object.keys(component)[0]].id;
            divProperty.querySelector('#propertyEdit').appendChild(id);
            if (Object.keys(component[Object.keys(component)[0]]).indexOf("property") > -1) {
                for (property of Object.keys(component[Object.keys(component)[0]].property)) {
                    let li = document.createElement('li');
                    li.innerHTML = `<p class=\"property-name\">${property}</p><input type=\"text\" class=\"property-content\" value=\"${component[Object.keys(component)[0]].property[property]}\">`;
                    console.log(li);
                    divProperty.querySelector('#propertyEdit').appendChild(li);
                };
            };
            if (Object.keys(component[Object.keys(component)[0]]).indexOf("style") > -1) {
                for (style of Object.keys(component[Object.keys(component)[0]].style)) {
                    let li = document.createElement('li');
                    li.innerHTML = `<p class=\"style-name\">${style}</p><input type=\"text\" class=\"style-content\" value=\"${component[Object.keys(component)[0]].style[style]}\">`;
                    divStyle.querySelector('#styleEdit').appendChild(li);
                    console.log(li);
                };
            };
        }
    },

    dec2hex: function(dec) {
        return dec.toString(16).padStart(2, "0")
    },

    generateId: function(len) {
        var arr = new Uint8Array((len || 40) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr, fc.dec2hex).join('')
    },

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
        const divCComponents = document.getElementById('c-components');
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

    verifyJsonToList: function(jsonContent) {
        let returnList = "<dl>";
        let tempList = "";
        for (recursivityC of jsonContent) {
            tempList = "";
            tempList = `<dt class="component" onclick=\'fc.selectComponent(\"${recursivityC[Object.keys(recursivityC)].id}\")\'>${Object.keys(recursivityC)}</dt>`;
            if (typeof recursivityC[Object.keys(recursivityC)].content == "object") {
                tempList = tempList + `<dd>${fc.verifyJsonToList(recursivityC[Object.keys(recursivityC)].content)}</dd>`;
            }
            returnList = returnList + tempList;
        }
        returnList = returnList + "</dl>";
        return returnList;      
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
                    dt.setAttribute("onclick",`fc.selectComponent(\'${firstsItensComponents[Object.keys(firstsItensComponents)[0]].id}\')`);
                    dt.innerText = Object.keys(firstsItensComponents)[0];
                    dl.appendChild(dt);
                    dd = document.createElement('dd');
                    dd.innerHTML = fc.verifyJsonToList(firstsItensComponents[Object.keys(firstsItensComponents)[0]].content);
                    dl.appendChild(dd);
                }
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
                return `<${dados.html}${propsHTML} componentId=${dados.id}>${fc.verifyJson(dados.content)}</${dados.html}>\n`;
            } else {
                return `<${dados.html}${propsHTML} componentId=${dados.id}>${dados.content}</${dados.html}>\n`;
            };
        } else {
            if (typeof dados.content == "object") {
                return `<${dados.html} componentId=${dados.id}>${fc.verifyJson(dados.content)}</${dados.html}>\n`;
            } else {
                return `<${dados.html} componentId=${dados.id}>${dados.content}</${dados.html}>\n`
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
fc.attPages(tempJson3);
fc.attComponents(tempJson3, 'index.html');

document.getElementById('viewer').srcdoc = fc.jsonToHtml(tempJson3, 'index.html');

$('#category > ul > li > button').click(function(){
    $("#category > ul > li > .active").removeClass("active");
    $(this).addClass('active');
});
