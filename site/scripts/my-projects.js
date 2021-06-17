function newProject(){
    window.location.replace("./chose-creation-way.html")
}

if (!Cookies.get('token')){
    window.location.replace("index.html");
}

const serverURL = 'http://localhost:3000/';
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
let nome = localStorage.getItem('nome');
let email = localStorage.getItem('email');
let id = localStorage.getItem('id');
let token = {headers: {'Authorization': ('Bearer '+Cookies.get('token'))}};
var a;

function update(id){
    window.location.replace(`modelo.html?projeto=${id}`);
}

axios.get(`${serverURL}projects/`, token)
.then(response => {
     a = response.data.projects
     if(a.length > 0){
        document.getElementById('container-none').style.display = 'none'
        document.getElementById('container-free').style.display = 'block'
        let data = new Date(a[0].createdAt);
        let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));
        document.getElementById('btnEditProject').setAttribute('onclick', `update('${a[0]._id}')`);
        document.getElementById('titulo').innerHTML = a[0].title;
        document.getElementById('descricao').innerHTML = a[0].subtitle;
        document.getElementById('dataC').innerHTML = dataFormatada;
    }
}) .catch((error) => {
    console.log(error)
});

$('#deleteP').click(function(event){
    event.preventDefault();
    id = a[0]._id
    const del = confirm("Deseja excluir o projeto ?")

    if(del == true){
    axios.delete(`${serverURL}projects/`+id, token)
    .then(()=>{
        window.alert("PROJETO EXCLUIDO")
    })
}
});

$('#modal-button').click(function(event){
    event.preventDefault();
    let _name = $('#modal-project-name').val();
    let _desc = $('#modal-project-description').val();
    let token = {headers: {'Authorization': ('Bearer '+Cookies.get('token'))}};
    console.log(token)
    
    if(_name === "" || _desc.length <1){
        md.showNotification('top', 'center', 'warning', 'preencha todos os campos');
    }else{
        axios.post(`${serverURL}projects/`, {title:_name, subtitle:_desc}, token)
        .then( () =>{
            md.showNotification('top', 'center', 'sucess', 'criado com sucesso');
            window.location.replace('my-projects.html')
        })
        .catch((error) => {
            md.showNotification('top', 'center', 'danger', error.response.data.error);
        });
    };  
});   
