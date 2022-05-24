$(document).ready(function () {
    $('#btnSubmit').click(function () {
        $.post('Registrar.php', {}, function (data) {

            console.log(data);
            $('#Nombre').val(data.inputNombre);
            $('#Apellido').val(data.inputAp_Pat);
            $('#Edad').val(data.inputEdad);
            $('#Ocupacion').val(data.inputOcupacion);
            $('#telefono').val(data.inputTelefono);
            $('#username').val(data.inputUsuario);
            $('#password').val(data.inputContrasena);
            $('#gender').val(data.inputGenero);

        }, 'json');
    });

   
         
    $('#btnProm').click(function()
    {
        let promesa = new Promise(function(resolve,reject) {
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function(){
                if(solicitud.readyState == 4 && solicitud.status == 200){
                    resolve(solicitud.response);
                }
            }
            solicitud.open("GET","ArchivoPromesa.txt",true);
            solicitud.send();
        });

        promesa.then(function(value) {document.getElementById("divHeader").innerHTML = value;});
    });
});
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
        document.getElementById("divHeader").innerHTML = "<h1 class=\"h3 mb-3 font-weight-normal\">Registro del usuario</h1>"; 
    }
    
}
