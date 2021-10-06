
  const requestURL = 'https://pekemir.github.io/noticias.json';
  const request = new XMLHttpRequest();
  const $imagen = document.querySelector('#imagen');
  var cantidaddenoticias;
  let posicionActual=0;
  var noticiass=null;
  var IMAGENES;
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
      console.log(request.status);
  const superNoticias = request.response;
  noticiass=superNoticias;
  console.log(noticiass);
  const noticias = noticiass['noticias'];
cantidaddenoticias=noticias.length;
console.log("aqui");
console.log(request.readyState);
IMAGENES = [
   'url(media/'+ noticias[cantidaddenoticias-3].imagen+'.jpg)',
   'url(media/'+ noticias[cantidaddenoticias-1].imagen+'.jpg)',
   'url(media/'+ noticias[cantidaddenoticias-2].imagen+'.jpg)',
];
console.log(IMAGENES[0]);
console.log(IMAGENES[1]);
console.log(IMAGENES[2]);
$imagen.style.backgroundImage = IMAGENES[posicionActual];
console.log(request.status);
inicio()
  }
function inicio() {
    // Variables
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    
    
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;
    
  


 
 function esperar(){

 }

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

   
    playIntervalo();
   
} 

