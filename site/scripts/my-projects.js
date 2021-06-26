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

$('#confirmDel').click(function(event){
    event.preventDefault();
    id = a[0]._id
    axios.delete(`${serverURL}projects/`+id, token)
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

function showDeleteModal(){
    let deleteModal = document.getElementById("delete-project-modal");
    deleteModal.style.opacity = "1";
    deleteModal.style.top = "1rem";
}

function deleteProject(){
    let deleteModal = document.getElementById("delete-project-modal");
    let deletedModal = document.getElementById("deleted-project-modal");
    deleteModal.style.opacity = "0";
    deleteModal.style.top = "-8rem"
    deletedModal.style.opacity = "1";
    deletedModal.style.top = "1rem";
    setTimeout(function(){
        location.reload();
        deletedModal.style.opacity = "0";
        deletedModal.style.top = "-6rem";
    }, 2000);
};

function cancelDelete(){
    let deleteModal = document.getElementById("delete-project-modal");
    deleteModal.style.opacity = "0";
    deleteModal.style.top = "-8rem"
};