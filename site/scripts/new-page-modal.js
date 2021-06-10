function showPageModal(){
    let modalContainer = document.getElementById('new-page-modal');
    let modalContent = document.getElementById('new-page-modal-content');
    modalContainer.style.opacity = "1";
    modalContainer.style.top = "0";
    modalContent.style.top = "0";
}
  
function closePageModal(){
    let modalContainer = document.getElementById('new-page-modal');
    let modalContent = document.getElementById('new-page-modal-content');
    modalContainer.style.opacity = "0";
    modalContainer.style.top = "-100%";
    modalContent.style.top = "-100%";
}

function enableSetSize(){
    let width = document.getElementById('width');
    let height = document.getElementById('height');
    width.disabled = false;
    width.style.backgroundColor = "transparent";
    width.style.cursor = "unset";
    height.disabled = false;
    height.style.backgroundColor = "transparent";
    height.style.cursor = "unset";
}

function disableSetSize(){
    let width = document.getElementById('width');
    let height = document.getElementById('height');
    width.disabled = true;
    width.style.backgroundColor = "#e2e2e2";
    width.style.cursor = "not-allowed";
    height.disabled = true;
    height.style.backgroundColor = "#e2e2e2";
    height.style.cursor = "not-allowed";
}