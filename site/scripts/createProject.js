const serverURL = 'http://localhost:3000/';


if (!Cookies.get('token')){
    window.location.replace("index.html");
}


$('#modal-button').click(function(event){
    event.preventDefault();
    let _name = $('#modal-project-name').val();
    let _desc = $('#modal-project-description').val();
    let _token = 'Bearer '+ Cookies.get('token');
    console.log(_token)
    
    if(_name === "" || _desc.length <1){
        md.showNotification('top', 'center', 'warning', 'preencha todos os campos');
    }else{
        axios.post(`${serverURL}projects/`, {authHeader: _token, title: _name, subtitle: _desc})
        .then( () =>{
            md.showNotification('top', 'center', 'sucess', 'criado com sucesso');
                window.location.replace("my-projects.html")  
        })
        .catch((error) => {
            md.showNotification('top', 'center', 'danger', error.response.data.error);
        });
    };  
});   
