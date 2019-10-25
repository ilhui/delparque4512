$(document).ready(function(){
  $('#btn_send').click(function(){
    var errores = '';

    // validando el nombre
    if( $('#names').val() == '' ){
      errores += '<p>Escribe tu nombre.</p>';
      $('#names').css("border-bottom-color","#F14b3b")
    }else{
      $('#names').css("border-bottom-color","#FFF")
    }
    // validando el correo
    if( $('#email').val() == '' ){
      errores += '<p>Ingrese un correo electrónico.</p>';
      $('#email').css("border-bottom-color","#F14b3b")
    }else{
      $('#email').css("border-bottom-color","#FFF")
    }
    // validando el mensaje
    if( $('#mensaje').val() == '' ){
      errores += '<p>Escribe un mensaje.</p>';
      $('#mensaje').css("border-bottom-color","#F14b3b")
    }else{
      $('#mensaje').css("border-bottom-color","#FFF")
    }

    // Enviando mensaje

    if(errores == '' == false) {
      var mensajeModal = '<div class="modal_wrap">' +
                            '<div class="mensaje_modal">'+
                              '<h3>Errores encontrados</h3>'+
                              errores +
                              '<span id="btn_close">Cerrar</span>'+
                            '</div>'+
                          '</div>'
      $('body').append(mensajeModal);
    }

    // Cerrando el modal_wrap
    $('#btn_close').click(function(){
      $('.modal_wrap').remove();

    });

  });

});
