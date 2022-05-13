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
});
