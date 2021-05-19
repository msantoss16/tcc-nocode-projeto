const serverURL = 'http://localhost:3000/';

if (Cookies.get('token')){
    window.location.replace("my-projects.html");
}

$('#btncad').click(function(event){
    event.preventDefault();
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    let _username = $('#uregis').val();
    let _email = $('#nregis').val();
    let _password = $('#pregis').val();
    let _passwordC = $('#pcregis').val();
    let _check = $('#check');
    
    
    if(_username === "" || _username.length <4){
        md.showNotification('top', 'center', 'warning', 'O usuário deve ter no minino 4 caracteres');
    }
    else if(!filter.test(_email)){
    md.showNotification('top', 'center', 'danger', 'Email inválido');
    }    
    else if(_password === "" || _password.length < 8){
        md.showNotification('top', 'center', 'warning', 'A senha deve ter no minino 8 caracteres');
    }
    else if(!_check.is(":checked")){
        md.showNotification('top', 'center', 'warning', 'Necessário aceitar os termos');
    }
    else if (_password === _passwordC){
        axios.post(`${serverURL}auth/register`, {name: _username, email: _email, password: _password})
            .then(response => {
                let token = response.data.token;
                Cookies.set('token', token, { expires: 1 });
                window.location.replace("my-projects.html");
            })
            .catch(error => {
                md.showNotification('top', 'center', 'danger', error.response.data.error);  
            })
    } else {
        md.showNotification('top', 'center', 'warning', 'Senhas diferentes');
    };
});



