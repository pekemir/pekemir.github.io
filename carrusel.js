window.onload = function () {
    // Variables
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    const titul= document.getElementById('titulonoticiaimagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
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
     'url(media/'+ noticias[cantidaddenoticias-3].imagen+'.jpg)',
     'url(media/'+ noticias[cantidaddenoticias-2].imagen+'.jpg)',
     'url(media/'+ noticias[cantidaddenoticias-1].imagen+'.jpg)',
     'url(media/'+ noticias[cantidaddenoticias-4].imagen+'.jpg)',
 ];
 TITULOS=[
     ''+noticias[cantidaddenoticias-3].titulo,
    ''+ noticias[cantidaddenoticias-2].titulo,
    ''+ noticias[cantidaddenoticias-1].titulo,
    ''+ noticias[cantidaddenoticias-4].titulo,

 ];
 console.log(TITULOS[0]);
 console.log(TITULOS[1]);
 console.log(TITULOS[2]);

 $imagen.style.backgroundImage = IMAGENES[posicionActual];
 titul.textContent=TITULOS[posicionActual];
 
 }
 playIntervalo();
    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();

    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        console.log("PASANDO");
        console.log(IMAGENES[posicionActual]);
        $imagen.style.backgroundImage = IMAGENES[posicionActual];
        console.log(TITULOS[posicionActual]);
        titul.textContent=TITULOS[posicionActual];
        
      
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        
    }

    // Eventos
   
    
    
  
    
   
} 
function clicknoticias(){
    console.log("hola");
   location.href='noticias.html';
}


