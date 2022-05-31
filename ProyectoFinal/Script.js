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


    $('btnModifBD'). click(function()
    {
        try{
            let parid = prompt("Teclee el ID a modificar");
            let nom = document.getElementById("Nombre").value;
            let Ape = document.getElementById("Apellido").value;
            let Edad = document.getElementById("Edad").value;
            let Ocupacion = document.getElementById("Ocupacion").value;
            let Telefono = document.getElementById("telefono").value;
            let Usernam = document.getElementById("username").value;
            let Pass = document.getElementById("password").value;
            let gener = document.getElementById("gender").value;

            if(parid == "" || nom == "" || Ape == "" || Edad == "" || Ocupacion == "" || Telefono == "" || Usernam == "" || Pass == "" || gener == ""){
                swal("Error", "No deje campos vacios", "error");
            }
            else{
                $.post('php/getRegistroBD.php', {par1:parid}, function(data){
                    if(data.parid == null){
                        swal("Error","No se encontro el registro", "error");
                    }
                    else{
                        $.post('php/modRegistro.php', {par1:parid, par2:nom, par3:Ape, par4:Edad, par5:Ocupacion, par6:Telefono, par7:Usernam, par8:Pass, par9:gener},
                        function(data){
                        }, 'json');
                        swal("Accion completada", "Se ha modificado correctamente", "success");
                        LimpiarFormulario();
                    }
                },'json');
            }

        }
        catch (exception){
            swal("Error", "No se ha concretado la accion", "error");
        }
    });

    $('#btnAgregar').click(function(){

        try{
            let nom = document.getElementById("Nombre").value;
            let Ape = document.getElementById("Apellido").value;
            let Edad = document.getElementById("Edad").value;
            let Ocupacion = document.getElementById("Ocupacion").value;
            let Telefono = document.getElementById("telefono").value;
            let Usernam = document.getElementById("username").value;
            let Pass = document.getElementById("password").value;
            let gener = document.getElementById("gender").value;

            if(parid == "" || nom == "" || Ape == "" || Edad == "" || Ocupacion == "" || Telefono == "" || Usernam == "" || Pass == "" || gener == ""){
                swal("Error", "No deje campos vacios", "error");
            }
            else{
                $.post('php/AgregarRegistro.php', {par1:parid, par2:nom, par3:Ape, par4:Edad, par5:Ocupacion, par6:Telefono, par7:Usernam, par8:Pass, par9:gener},
                function(data){
                }, 'json');
                swal("Accion completada", "Se ha modificado correctamente", "success");
                LimpiarFormulario();                    
            }
        }
        catch (exception){
            swal("Error", "No se ha concretado la accion", "error");
        }
    });

    $('#btnElimBD').click(function(){
        let parid = prompt("Teclee el ID a eliminar");

        if(parid == ""){
            swal("Error","No deje el campo vacio", "error"); 
        }
        else {
            $.post('php/getRegistroBD.php', {par1:parid}, function(data){
                if(data.parid == null){
                    swal("Error","No se encontro el registro", "error"); 
                }
                else{
                    $.post('php/ElimRegistro.php', {pra1:parid},function(data){
                        swal("Accion completada", "Se ha modificado correctamente", "success");
                        LimpiarFormulario();
                    },'json');
                }
            },'json');
        }
    });

    $('#btnConsBD').click(function() {
        let parid=prompt("Teclee el ID a consultar");

        $.post('getRegistroBD.php',{par1:parid},function(data){
          refrescar(data);
          },'json');
    });
    function refrescar(objeto) {
        console.log(objeto);
        $('#Nombre').val(objeto.Nombre);
        $('#Apellido').val(objeto.ApPat);
        $('#Edad').val(objeto.Edad);
        $('#Ocupacion').val(objeto.Ocupacion);
        $('#telefono').val(objeto.Telefono);
        $('#username').val(objeto.Usuario);
        $('#password').val(objeto.Contrasena);
        $('#gender').val(objeto.Genero);
    }

    function LimpiarFormulario(){
        $('#Nombre').val("");
        $('#Apellido').val("");
        $('#Edad').val("");
        $('#Ocupacion').val("");
        $('#telefono').val("");
        $('#username').val("");
        $('#password').val("");
    }
});

