
    $(document) .ready(function(){
        $('#idcontent').click(function(even){
            console.log(even);
            $(even.target).toggleClass('cambiodecaja')
        });
    });