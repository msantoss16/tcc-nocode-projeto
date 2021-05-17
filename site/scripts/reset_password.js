const serverURL = 'http://localhost:3000/';

/* var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);      
        }
    }
}; */
    
    let url = window.location.search;
    let urlParms = new URLSearchParams(url)
    let _email = urlParms.get('email');
    let _token = urlParms.get('token');

$('#btnEnv').click(function(event){
    event.preventDefault();
    let _password = $('#password').val();
    let _passwordC = $('#passwordC').val();

    if(_password === "" || _password.length < 8){
        md.showNotification('top', 'center', 'danger', 'A senha deve ter no minino 8 caracteres')
    }
    else if(_password === _passwordC){
    axios.post(`${serverURL}auth/reset_password`, {email: _email, token: _token, password: _password})
    .then( () =>{
        md.showNotification('top', 'center', 'success', 'Senha redefinida com sucesso');
        window.location('my-projects.html')
    })
    .catch(error => {
        md.showNotification('top', 'center', 'danger', error);  
    })

    } else {
        md.showNotification('top', 'center', 'danger', 'Senhas diferentes');
    };
});

