function newProject(){
    window.location.replace("/site/chose-creation-way.html")
}


if (!Cookies.get('token')){
    window.location.replace("index.html");
}

const serverURL = 'http://localhost:3000/';

let nome = localStorage.getItem('nome');
let email = localStorage.getItem('email');
let id = localStorage.getItem('id');
let token = 'Bearer '+ Cookies.get('token');


axios.get(`${serverURL}projects/`, {authHeader: token})
.then(response => {
    console.log(response.data.projects)
}) .catch((error) => {
    console.log(error)
});
