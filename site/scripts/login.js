const serverURL = 'http://localhost:3000/';

if (Cookies.get('token')){
    window.location.replace("my-projects.html");
}

$('#btnlogin').click(function(event){
    event.preventDefault();
    let _email = $('#nlogin').val();
    let _password = $('#plogin').val();
    axios.post(`${serverURL}auth/authenticate`, {email: _email, password: _password})
        .then(response => {
            let token = response.data.token;
            Cookies.set('token', token, {expires: 1});
            location.reload()
        })
        .catch(error => {
            md.showNotification('top', 'center', 'danger', error.response.data.error);
        }) 
});

