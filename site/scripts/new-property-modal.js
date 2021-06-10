function addProperty(){
    let modalContainer = document.getElementById('new-property-modal');
    let modalContent = document.getElementById('new-property-modal-content');
    modalContainer.style.opacity = "1";
    modalContainer.style.top = "0";
    modalContent.style.top = "0";
}

function closePropertyModal(){
    let modalContainer = document.getElementById('new-property-modal');
    let modalContent = document.getElementById('new-property-modal-content');
    modalContainer.style.opacity = "0";
    modalContainer.style.top = "-100%";
    modalContent.style.top = "-100%";
}