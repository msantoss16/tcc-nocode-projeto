fc = {
    pages: [],
    elements: [],
    pageSelected: '',   

    convertNested: function(ol) {
        let tempJson = [];
        let nodeListLI = ol[0].querySelectorAll(':scope > li');
        if (nodeListLI.length > 0) {
            for (li in nodeListLI) {
                if(isNaN(li))
                    break;
                let elementJson = fc.elements.findIndex(element => {
                    if(!isNaN(li))
                        if (nodeListLI[li].querySelector(':scope > p').getAttribute('componentId') == element[Object.keys(element)[0]].id)
                            return element;
                });
                if (elementJson > -1) {
                    tempJson.push(fc.elements[elementJson]);
                    if (typeof tempJson[tempJson.length-1][Object.keys(tempJson[tempJson.length-1])[0]].content == "object")
                        tempJson[tempJson.length-1][Object.keys(tempJson[tempJson.length-1])[0]].content = "";
                        if (nodeListLI[li].querySelectorAll(':scope > ol').length > 0) {
                            tempJson[tempJson.length-1][Object.keys(tempJson[tempJson.length-1])[0]].content = fc.convertNested(nodeListLI[li].querySelectorAll(':scope>ol'));
                        }
                }
            }
        }
        return tempJson
    },

    idInJson: function(content, id, edit) {
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
                    if (style == Object.keys(component[Object.keys(component)[0]].style)[0]) {
                        li.classList.add("first-component");
                    }
                    li.innerHTML = `<p class=\"style-name\">${style}</p><input type=\"text\" class=\"style-content\" value=\"${component[Object.keys(component)[0]].style[style]}\">`;
                    divStyle.querySelector('#styleEdit').appendChild(li);
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
            li.innerHTML = `<button draggable='true' class='component-button'>${Object.keys(modelos[modelActived][cCont])}</button>`
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
                li.innerHTML = `<button class='page-select active' onclick="fc.selectPage(\'${page}\', tempJson3)">${page.slice(0, page.length-5)}</button>`;
            } else {
                li.innerHTML = `<button class='page-select' onclick="fc.selectPage(\'${page}\', tempJson3)">${page.slice(0, page.length-5)}</button>`;
            }
            divPages.querySelector("ul").appendChild(li);
        }
    },

    selectPage: function(page, tempJson) {
        fc.attComponents(tempJson, page);
        tempJson.appCode.pages[tempJson.appCode.pages.findIndex(element => {if (element.href == page) return element})].pageComponents = fc.convertNested(document.querySelectorAll('#component-list'));
        document.getElementById('viewer').srcdoc = fc.jsonToHtml(tempJson, page);
    },

    verifyJsonToList: function(jsonContent) {
        let returnList = "<ol>";
        let tempList = "";
        for (recursivityC of jsonContent) {
            tempList = "<li>";
            tempList = tempList + `<p class="component" componentId=\'${recursivityC[Object.keys(recursivityC)].id}\' onclick=\'fc.selectComponent(\"${recursivityC[Object.keys(recursivityC)].id}\")\'>${Object.keys(recursivityC)}</p>`;
            if (typeof recursivityC[Object.keys(recursivityC)].content == "object") {
                tempList = tempList + `${fc.verifyJsonToList(recursivityC[Object.keys(recursivityC)].content)}`;
            }
            returnList = returnList + tempList + "</li>";
        }
        returnList = returnList + "</ol>";
        return returnList;      
    },

    attComponents: function(tempJson, page) {
        let divComponents = document.getElementById('components');
        let appCodePages = tempJson.appCode.pages;
        for (pageAccess of appCodePages) {
            if (pageAccess.href == page) {
                divComponents.innerHTML = '';
                let ol = document.createElement('ol');
                ol.classList.add("defaultC");
                ol.classList.add("vertical");
                ol.setAttribute('id', 'component-list')
                for (firstsItensComponents of pageAccess.pageComponents) {
                    let li = document.createElement('li');
                    li.innerHTML = `<p class=\"component\" componentId=\'${firstsItensComponents[Object.keys(firstsItensComponents)[0]].id}\' onclick=\"fc.selectComponent(\'${firstsItensComponents[Object.keys(firstsItensComponents)[0]].id}\')\">${Object.keys(firstsItensComponents)[0]}</p>${fc.verifyJsonToList(firstsItensComponents[Object.keys(firstsItensComponents)[0]].content)}`;
                    ol.appendChild(li);
                }
                divComponents.appendChild(ol);
                // for (itemComponent of Object.keys(pageAccess.pageComponents)) {
                //     console.log(itemComponent);
                // };
            };
        }; 
    },

    verifyJson: function(dadosNext) {
        let tempHTML = '';
        for (dado of dadosNext) {
            fc.elements.push(dado); 
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
            if (pageHTML.href == page) {
                for (component of pageHTML.pageComponents) {
                    fc.elements.push(component);
                    html = html + fc.recursivityJson(Object.keys(component), component[Object.keys(component)]);
                }
            }
        }
        html = html + '</body></html>'
        return html;
    },
}

fc.attPalette();
fc.attPaletteComponents("Common")
fc.attPages(tempJson3);
fc.attComponents(tempJson3, 'index.html');

document.getElementById('viewer').srcdoc = fc.jsonToHtml(tempJson3, 'index.html');

$('#category > ul > li > button').click(function(){
    $("#category > ul > li > .active").removeClass("active");
    $(this).addClass('active');
});

$('#pages > ul > li > button').click(function(){
    $("#pages > ul > li > .active").removeClass("active");
    $(this).addClass('active');
});

$(function  () {
    $('ol.defaultC').sortable({    
        group: 'nested',
        onDrop: function($item, container, _super) {
            container.el.removeClass("active");
            _super($item, container);
            tempJson3.appCode.pages[0].pageComponents = fc.convertNested(document.querySelectorAll('#component-list'));
            document.getElementById('viewer').srcdoc = fc.jsonToHtml(tempJson3, 'index.html');
        }
    });
});
  