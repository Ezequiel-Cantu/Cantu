$(document).ready(function () {
    $('#btnModifBD'). click(function()
    {
        let Id = document.getElementById("ID").value;
        let nom = document.getElementById("Nombre").value;
        let Ape = document.getElementById("Apellido").value;
        let Edad = document.getElementById("Edad").value;
        let Ocupacion = document.getElementById("Ocupacion").value;
        let Telefono = document.getElementById("telefono").value;
        let Usernam = document.getElementById("username").value;
        let Pass = document.getElementById("password").value;
        let gener = document.getElementById("gender").value;

       try {
        if(Id == ""){
            swal("Error","No se encontro el registro", "error");
        }
        else{
            $.post('ArchivoPHP/modRegistro.php', {par1:Id, par2:nom, par3:Ape, par4:Edad, par5:Ocupacion, par6:Telefono, par7:Usernam, par8:Pass, par9:gener},
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
        
            var Id = document.getElementById("ID").value;
           
            $.post('ArchivoPHP/getRegistroBD.php', {par1:Id}, function(data){
                if(data.idUsuario == null){
                    swal("Error","No se encontro el registro", "error"); 
                }
                else{
                    $.post('ArchivoPHP/ElimRegistro.php', {par1:Id},function(data){
                    },'json');
                    swal("Accion completada", "Se ha eliminado correctamente", "success");
                        LimpiarFormulario();
                }
            },'json');          
            
    });

    $('#btnConsBD').click(function() {
        swal("Teclee el ID a consultar: ",{
            content: "input",
        })
        .then((parid) => {
            $.post('ArchivoPHP/getRegistroBD.php',{par1:parid},function(data){
                refrescar(data);
                },'json');
        })
    });
    function refrescar(objeto) {
        console.log(objeto);
        $('#ID').val(objeto.idUsuario);
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
        $('#gender').val("");
    }
});