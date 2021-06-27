function myProfile(){
    window.location.href("/site/")
}

function choseModel() {
    window.location.replace("chose-models.html");
}

function showModal(){
    document.getElementById('modal').style.opacity = "1";
    document.getElementById('modal').style.top = "0";
    document.getElementById('modal-content').style.top = "0";
}
  
function closeModal(){
    document.getElementById('modal').style.opacity = "0";
    document.getElementById('modal').style.top = "-100%";
    document.getElementById('modal-content').style.top = "-100%";
}