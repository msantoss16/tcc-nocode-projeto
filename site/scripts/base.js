serverURL = 'http://localhost:3000/';

if (!Cookies.get('token')){
    window.location.replace("index.html");
};

function sair() {
    Cookies.remove('token');
    localStorage.removeItem('id')
    location.reload();
};

function update(){
    window.location.replace("modelo.html")
}

id = localStorage.getItem('id')

// axios.get(`${serverURL}auth/`+id)
//     .then(res => {
//         const user = res.data.user
//         let nomeU = document.getElementById('nomeU')
//         let emailU = document.getElementById('emailU')
//         nomeU.innerHTML = user.name
//         emailU.innerHTML = user.email
//     })



