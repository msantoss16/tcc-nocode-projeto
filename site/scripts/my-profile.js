function activeGeral(){
    document.getElementById('gerenciar-container').style.display = "none";
    document.getElementById('assinaturas-container').style.display = "none";
    document.getElementById('geral-container').style.display = "flex";
}

function activeAssinaturas(){
    document.getElementById('gerenciar-container').style.display = "none";
    document.getElementById('geral-container').style.display = "none";
    document.getElementById('assinaturas-container').style.display = "flex";
}

function activeGerenciar(){
    document.getElementById('geral-container').style.display = "none";
    document.getElementById('assinaturas-container').style.display = "none";
    document.getElementById('gerenciar-container').style.display = "flex";
}

function editUser(){
    document.getElementById('username').focus();
}

function editEmail(){
    document.getElementById('email').focus();
}

function editPassword(){
    document.getElementById('currentPassword').focus();
}