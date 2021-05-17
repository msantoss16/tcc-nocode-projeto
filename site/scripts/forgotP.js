const serverURL = 'http://localhost:3000/';

$('#btnEnv').click(function(event){
    event.preventDefault();
    let _email = $('#email').val();
    axios.post(`${serverURL}auth/forgot_password`, {email: _email})
    .then( () => {
        md.showNotification('top', 'center', 'sucess', 'confira seu Email');
    })
    .catch(error => {
        md.showNotification('top', 'center', 'danger', error.response.data.error);
    })
});