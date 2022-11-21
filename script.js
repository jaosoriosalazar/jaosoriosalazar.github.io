window.addEventListener('load', loadPage);
let recurso     = document.getElementById('recurso'),
    btnSubmit   = document.querySelector('#enviar'),
    contenidos  = document.querySelector('#contenidos'),
    progressBar = document.querySelector('#progress-bar'),
    display     = document.querySelector('#display'),
    request     = new XMLHttpRequest();

function loadPage(){
    url.value = location.href;


    btnSubmit.addEventListener('click', ()=>{
        request.open('GET', recurso.value, true);
        request.send();
        
        request.addEventListener('load', loadResource);
        request.addEventListener('loadstart', loadStartResource);
        request.addEventListener('loadend', loadEndResource);
        request.addEventListener('progress', checkProgress);
    })

}

function loadResource() {
    contenidos.innerHTML = request.responseText;
    cabeceras.innerHTML  = request.getAllResponseHeaders();
    estados.innerHTML    = request.readyState;
    codigo.innerHTML     = request.status;
}

function loadStartResource(){
    progressBar.value = 0;
}
function loadEndResource(e){
    progressBar.value = e.loaded;
}

function checkProgress(e){
    if (e.lengthComputable){
        progressBar.max= e.total;
        progressBar.value = e.loaded;
        display.innerHTML = Math.floor((e.loaded/e.total)*100) + '%';
    }
}