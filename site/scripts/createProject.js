const serverURL = 'http://localhost:3000/';


if (!Cookies.get('token')){
    window.location.replace("index.html");
}


$('#modal-button').click(function(event){
    event.preventDefault();
    let _name = $('#modal-project-name').val();
    let _desc = $('#modal-project-description').val();
    let token = {headers: {'Authorization': ('Bearer '+Cookies.get('token'))}};
    
    if(_name === "" || _desc.length <1){
        md.showNotification('top', 'center', 'warning', 'preencha todos os campos');
    }else{
        axios.post(`${serverURL}projects/`, token)
        .then( () =>{
            md.showNotification('top', 'center', 'sucess', 'criado com sucesso');
            window.location.replace('my-projects.html')
        })
        .catch((error) => {
            md.showNotification('top', 'center', 'danger', error.response.data.error);
        });
    };  
});   
