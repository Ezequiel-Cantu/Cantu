$(document).ready(function () {
    $('#btnJSON').click(function () {
        
    });
});

function AjaxFunction() {
    var AjaxRequest;
        AjaxRequest = new XMLHttpRequest();
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
        AjaxRequest.onreadystatechange = function(){
            var inputNombre, inputAp_Pat, inputContrasena, inputEdad, inputGenero, inputOcupacion, inputTelefono, inputUsuario;
            
        };
        AjaxRequest.open("GET","Registrar.php", true);
        AjaxRequest.send();
}