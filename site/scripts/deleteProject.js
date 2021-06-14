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