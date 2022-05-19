window.onload = function() {

    document.getElementById("btnAjax").addEventListener("click",pedirHeader);
    document.getElementById("btnAjaxReset").addEventListener("click",reiniciarHeader);
    
    function pedirHeader() {
    
    var solicitud = new XMLHttpRequest();          
    solicitud.onreadystatechange = function() {  

        if (solicitud.readyState == 4 && solicitud.status == 200) {                
            document.getElementById("divHeader").innerHTML = solicitud.responseText; 
    }};
    
    solicitud.open("GET", "Archivo.txt", true);
    solicitud.send();
    
     }
    
    function reiniciarHeader() {
        document.getElementById("divHeader").innerHTML = "<h1 class=\"h3 mb-3 font-weight-normal\">Registro de alumno</h1>"; 
    }
    
    }