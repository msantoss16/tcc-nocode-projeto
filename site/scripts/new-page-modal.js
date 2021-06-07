function showModal(){
    document.getElementById('new-page-modal').style.opacity = "1";
    document.getElementById('new-page-modal').style.top = "0";
    document.getElementById('modal-content').style.top = "0";
}
  
function closeModal(){
    document.getElementById('new-page-modal').style.opacity = "0";
    document.getElementById('new-page-modal').style.top = "-100%";
    document.getElementById('modal-content').style.top = "-100%";
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