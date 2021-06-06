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
    document.getElementById('width').disabled = false;
    document.getElementById('width').style.backgroundColor = "transparent";
    document.getElementById('width').style.cursor = "unset";
    document.getElementById('height').disabled = false;
    document.getElementById('height').style.backgroundColor = "transparent";
    document.getElementById('height').style.cursor = "unset";
}

function disableSetSize(){
    document.getElementById('width').disabled = true;
    document.getElementById('width').style.backgroundColor = "#e2e2e2";
    document.getElementById('width').style.cursor = "not-allowed";
    document.getElementById('height').disabled = true;
    document.getElementById('height').style.backgroundColor = "#e2e2e2";
    document.getElementById('height').style.cursor = "not-allowed";
}