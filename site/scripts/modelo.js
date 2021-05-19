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
}

fc.attPalette();
fc.attPaletteComponents("Comum")
fc.attPages(tempJson2);
fc.attComponents(tempJson2, 'index.html');

$('#category > ul > li > button').click(function(){
    $("#category > ul > li > .active").removeClass("active");
    $(this).addClass('active');
});
