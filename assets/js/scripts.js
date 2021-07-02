


$(function () {


    $('.carousel').carousel({
        interval: 2000
        
      })


    $('[data-toggle="tooltip"]').tooltip();
    console.log("en el toggle");





    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
        console.log("Correo Enviado");
    });


    $("#titulo, #titulo2").dblclick(function () {
        
        $(this).css('color', 'red');
        console.log("titulo en rojo");
    });


    
// $(".targetatarget").click(function () {
    $(".targetatarget").on( "click", function() {
    
    $('.targetatarget').parent().children('p').toggle();
    
        console.log("toggle targeta contenido");
    });

    
})