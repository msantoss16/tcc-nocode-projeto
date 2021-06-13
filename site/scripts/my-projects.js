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
let token = {headers: {'Authorization': ('Bearer '+Cookies.get('token'))}};
var a

axios.get(`${serverURL}projects/`, token)
.then(response => {
     a = response.data.projects
     if(a.length > 0){
        document.getElementById('container-none').style.display = 'none'
        document.getElementById('container-free').style.display = 'block'

        let titulo = document.getElementById('titulo')
        let descricao = document.getElementById('descricao')
        let dataC = document.getElementById('dataC')
        titulo.innerHTML = a[0].title
        descricao.innerHTML = a[0].subtitle
        dataC.innerHTML = a[0].createdAt

    }
}) .catch((error) => {
    console.log(error)
});
