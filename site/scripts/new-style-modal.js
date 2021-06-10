function addStyle(){
    let modalContainer = document.getElementById('new-style-modal');
    let modalContent = document.getElementById('new-style-modal-content');
    modalContainer.style.opacity = "1";
    modalContainer.style.top = "0";
    modalContent.style.top = "0";
}

function closeStyleModal(){
    let modalContainer = document.getElementById('new-style-modal');
    let modalContent = document.getElementById('new-style-modal-content');
    modalContainer.style.opacity = "0";
    modalContainer.style.top = "-100%";
    modalContent.style.top = "-100%";
}