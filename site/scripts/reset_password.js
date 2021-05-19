const serverURL = 'http://localhost:3000/';
  
    let url = window.location.search;
    let urlParms = new URLSearchParams(url)
    let _email = urlParms.get('email');
    let _token = urlParms.get('token');

$('#btnEnv').click(function(event){
    event.preventDefault();
    let _password = $('#password').val();
    let _passwordC = $('#passwordC').val();

    if(_password === "" || _password.length < 8){
        md.showNotification('top', 'center', 'warning', 'A senha deve ter no minino 8 caracteres')
    }
    else if(_password === _passwordC){
    axios.post(`${serverURL}auth/reset_password`, {email: _email, token: _token, password: _password})
    .then( () =>{
        window.location.replace('index.html')
        md.showNotification('top', 'center', 'success', 'Senha redefinida com sucesso');    
    })
    .catch(error => {
        md.showNotification('top', 'center', 'danger', error.response.data.error);  
    })

    } else {
        md.showNotification('top', 'center', 'warning', 'Senhas precisam ser iguais');
    };
});

