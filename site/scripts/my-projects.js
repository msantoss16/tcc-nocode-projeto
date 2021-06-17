function newProject(){
    window.location.href("/site/chose-creation-way.html")
}

function showDeleteModal(){
    var deleteModal = document.getElementById("delete-project-modal");
    deleteModal.style.opacity = "1";
    deleteModal.style.top = "1rem";
}

function deleteProject(){
    var deleteModal = document.getElementById("delete-project-modal");
    var deletedModal = document.getElementById("deleted-project-modal");
    deleteModal.style.opacity = "0";
    deleteModal.style.top = "-8rem"
    deletedModal.style.opacity = "1";
    deletedModal.style.top = "1rem";
    setTimeout(function(){
        deletedModal.style.opacity = "0";
        deletedModal.style.top = "-6rem";
    }, 3000);
};

function cancelDelete(){
    var deleteModal = document.getElementById("delete-project-modal");
    deleteModal.style.opacity = "0";
    deleteModal.style.top = "-8rem"
};