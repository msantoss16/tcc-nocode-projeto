function showSettingsModal(){
    let modalContainer = document.getElementById('settings-modal');
    let modalContent = document.getElementById('settings-modal-content');
    modalContainer.style.opacity = "1";
    modalContainer.style.top = "0";
    modalContent.style.top = "0";
}
  
function closeSettingsModal(){
    let modalContainer = document.getElementById('settings-modal');
    let modalContent = document.getElementById('settings-modal-content');
    modalContainer.style.opacity = "0";
    modalContainer.style.top = "-100%";
    modalContent.style.top = "-100%";
}