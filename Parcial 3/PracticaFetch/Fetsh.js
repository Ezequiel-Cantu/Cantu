$(document).ready(function () {
    $('#btnSubmit').click(function () {
        $.post('Fetch.php', {}, function (data) {

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
    $('#AjaxPromise').click(function(){
        let Promesa = new Promise (function(resolve,reject){
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange=function(){
                if (solicitud.readyState == 4 && solicitud.status == 200) {
                    resolve(solicitud.responseText);
                }};
                solicitud.open("GET", "Fetch.php", true);
                solicitud.send();
            });
            Promesa.then(function(value) {document.getElementById("Fecha").innerHTML = value;});
    });
    
    $('#btnFetch').click(function(){
        console.log('click');
        var promesa = fetch('Fetch.php');
        promesa.then (respuesta => respuesta.json()).then(function(datos){ console.log(datos)});
    });
});
