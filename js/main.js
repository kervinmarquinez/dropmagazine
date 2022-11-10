$(document).ready(function(){

    const hacerClick = $('.cabecera__menu > #boton__desplegable')
    const menuDesplegable = $('.cabecera__menu__desplegable');

    hacerClick.click(function(e){
        e.preventDefault();
        menuDesplegable.slideToggle();

    });

});