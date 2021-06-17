const serverURL = 'http://localhost:3000/';

if (Cookies.get('token')){
    window.location.replace("my-projects.html");
}

$('#btnEnv').click(function(event){
    event.preventDefault();
    let _email = $('#email').val();
    axios.post(`${serverURL}auth/forgot_password`, {email: _email})
    .then( () => {
        md.showNotification('top', 'center', 'sucess', 'Confira seu Email');
    })
    .catch(error => {
        md.showNotification('top', 'center', 'danger', error.response.data.error);
    })
});