$(document).ready(function(){

    const logo = $('#logo path');
    const link = $('.cabecera__link');
    const linkDesplegable = $('  .cabecera__menu__desplegable > .cabecera__menu__element > .cabecera__link');
    const burgerDos = $('.cabecera__burger__element:nth-child(2)');
    const burgerCuatro = $('.cabecera__burger__element:nth-child(4)');
    const buscador = $('.cabecera__buscador');
    const articleHover = $('category__articulos__element');
    const articleImagen = $('category__imagen');


    link.css('color', '#0A0A0A');
    linkDesplegable.css('color', 'white');
    burgerDos.css ('background-color', '#0A0A0A');
    burgerCuatro.css ('background-color', '#0A0A0A');
    buscador.css ('border', '2px solid #CB0355');
    logo.attr('fill','#0A0A0A');

    link.hover(function(){
        $(this).css("color", "#CB0355");
        }, function(){
        $(this).css("color", "#0A0A0A");
      });

    linkDesplegable.hover(function(){
        $(this).css("color", "#0A0A0A");
        }, function(){
        $(this).css("color", "white");
    });

});