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
            let name = response.data.user.name
            let email = response.data.user.email
            let id = response.data.user._id
            let token = response.data.token;
            Cookies.set('token', token, {expires: 1});
            location.reload()
            localStorage.setItem('nome', name)
            localStorage.setItem('email', email)
            localStorage.setItem('id', id)
        })
        .catch(error => {
            md.showNotification('top', 'center', 'danger', error.response.data.error);
        }) 
});

