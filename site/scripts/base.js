

if (!Cookies.get('token')){
    window.location.replace("index.html");
};

function sair() {
    Cookies.remove('token');
    location.reload();
};