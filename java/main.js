window.onload = function () {
    // Variables
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $imagen = document.querySelector('#imagencarrusel');
    const titul= document.getElementById('titulonoticiaimagen');
   let intervalo;
    const requestURL = 'https://pekemir.github.io/noticias.json';
    const request = new XMLHttpRequest();
   var cantidaddenoticias;
    var noticiass=null;
    var IMAGENES;
    var TITULOS;
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    const superNoticias = request.response;
    noticiass=superNoticias;
    console.log(noticiass);
    const noticias = noticiass['noticias'];
 cantidaddenoticias=noticias.length;
 console.log("aqui");

 IMAGENES = [
     'url(imagenes/'+ noticias[cantidaddenoticias-3].imagen+'.jpg)',
     'url(imagenes/'+ noticias[cantidaddenoticias-2].imagen+'.jpg)',
     'url(imagenes/'+ noticias[cantidaddenoticias-1].imagen+'.jpg)',
     'url(imagenes/emma.jpg)',
     /* 'url(imagenes/'+ noticias[cantidaddenoticias-4].imagen+'.jpg)',*/
 ];
 TITULOS=[
     ''+noticias[cantidaddenoticias-3].titulo,
    ''+ noticias[cantidaddenoticias-2].titulo,
    ''+ noticias[cantidaddenoticias-1].titulo,
    'se disputan el plan de captacion en el colegio camon aznar de zaragoza',

 ];
 console.log(TITULOS[0]);
 console.log(TITULOS[1]);
 console.log(TITULOS[2]);

 $imagen.style.backgroundImage = IMAGENES[posicionActual];
 titul.textContent=TITULOS[posicionActual];
 
 }
 playIntervalo();
  function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();

    }

    function renderizarImagen () {
        console.log("PASANDO");
        console.log(IMAGENES[posicionActual]);
        $imagen.style.backgroundImage = IMAGENES[posicionActual];
        console.log(TITULOS[posicionActual]);
        titul.textContent=TITULOS[posicionActual];
    }

     function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
      }
 } 
function clicknoticias(){
    console.log("hola");
   location.href='noticias.html';
}



