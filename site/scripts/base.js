if (!Cookies.get('token')){
    window.location.replace("index.html");
};

function sair() {
    Cookies.remove('token');
    localStorage.removeItem('nome')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
    location.reload();
};



