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


function newProject(){
    window.location.replace("/site/chose-creation-way.html")
}

////////////////////////////////////////////////////////////////
serverURL = 'http://localhost:3000/';

if (!Cookies.get('token')){
    window.location.replace("index.html");
}
let id = localStorage.getItem('id');

axios.get(`${serverURL}auth/`+id)
.then(res => {
     const u = res.data.user

        let nomeP = document.getElementById('nomeP')
        let nomeD = document.getElementById('nomeD')
        let emailD = document.getElementById('emailD')
        let nomeUE = document.getElementById('nomeUE')
        let emailUE = document.getElementById('emailUE')
        nomeP.innerHTML = u.name
        nomeD.innerHTML = u.name
        emailD.innerHTML = u.email
        nomeUE.innerHTML = u.name
        emailUE.innerHTML = u.email

    }
) .catch((error) => {
    console.log(error)
});

$('#save-button').click(function(event){
    event.preventDefault();
    let _password = $('#currentPassword').val();
    let _passwordC = $('#changePassword').val();
    let _id = localStorage.getItem('id');
    let token = {headers: {'Authorization': ('Bearer '+Cookies.get('token'))}};

    if(_passwordC === "" || _passwordC.length < 8){
        md.showNotification('top', 'center', 'warning', 'A senha deve ter no minimo 8 caracteres');
    }
    else{
    axios.post(`${serverURL}auth/change_password/`+_id, {password: _password, newPassword: _passwordC}, token)
    .then( () =>{
        md.showNotification('top', 'center', 'sucess', 'Senha alterada com sucesso');
    })
    .catch(error => {
        md.showNotification('top', 'center', 'danger', error.response.data.error);
    })
}});
