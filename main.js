$(document).ready( function() { 
    $("#numero-cpf").on('submit', function(e){
  
        e.preventDefault();
        
        var novoCadastro= $('#numero-cpf').val();
        var novoEnderço= $('#endereço-completo').val();
       
        if(novoCadastro != ""){
            $('#lista').append(`<li>${novoCadastro}</li>`);
        }
        
        if(novoEnderço != ""){
            $('#lista').append(`<li>${novoEnderço}</li>`);
        }

        $('li').click(function () {
            $(this).addClass('marcado');

            $('#numero-cpf').val("");
            $('#endereço-completo').val("");
        });

    });
  })