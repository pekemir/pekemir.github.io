
var numnoticia;
var max;
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const requestURL = 'https://pekemir.github.io/noticias.json';
    const request = new XMLHttpRequest();
    const myH1=document.getElementById('h1primeranoticia2');
      
    const myp1=document.getElementById('p1primeranoticia2');
   
    const mypp1=document.getElementById('p2primeranoticia2');
   
    const fondo1=document.getElementById('primeranoticia2');
const TIEMPO_INTERVALO_MILESIMAS_SEG = 4000;
let posicionActual = 0;
let $imagen = document.querySelector('#primeranoticia2');

let intervalo;

var cantidaddenoticias;
var noticiass=null;
var IMAGENES=[];

window.onload = function getGET()
{
    console.log("holapagnoticia");
    // capturamos la url
    var loc = document.location.href;
    console.log(loc);
    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        console.log(GET);
      
        var get = {};
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
               numnoticia=tmp[1];     
            console.log(tmp[1]);
            console.log("aora");
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function() {
            const superNoticias = request.response;
            noticiass=superNoticias;    
            var numero=parseInt(numnoticia, 10);
            console.log(numero);
            console.log(numnoticia+"holaaaaa");
            showNoticia(numnoticia);}
        }
        return get;
        
       
    }
    
}
    
    
    
   

    function showNoticia(numero) {
       
        
        var valorinicio=numero;
        
       const noticias = noticiass['noticias'];
       console.log(noticias.length);
       console.log(valorinicio);
        max=noticias.length;
        console.log(noticias[valorinicio].imagenes.length);
        console.log(noticias[valorinicio].imagenes);
       
        //array de imagenes
        for (let index = 0; index < noticias[valorinicio].imagenes.length; index++) {
            var ruta='url(imagenes/'+ noticias[valorinicio].imagenes[index]+'.jpg)';
            console.log(ruta);
           IMAGENES[index]=ruta;
           fondo1.style.backgroundImage=ruta;
        }
        
      //hola
     
      
         
          myH1.textContent = noticias[valorinicio].titulo;
          myp1.textContent = noticias[valorinicio].textolargo;
          mypp1.textContent = noticias[valorinicio].fecha;
          var ruta="url(imagenes/"+ noticias[valorinicio].imagen+".jpg)";
          fondo1.style.backgroundImage=ruta;
          playIntervalo();
        }
        function playIntervalo() {
            intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
          }
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
            
           
        }

        function abrirnoticiasig(){
                var numero=parseInt(numnoticia, 10);

                console.log(numero+1);
                var noticianumero=numero+1;
                if (max>noticianumero){
                    numnoticia=noticianumero;
              showNoticia(noticianumero);
               /* location.href='noticia.html?var1='+noticianumero;*/}
              
              
          }
          function abrirnoticiasant(){
            var numero=parseInt(numnoticia, 10);

            console.log(numero+1);
            var noticianumero=numero-1;
            if (noticianumero>=0){
                numnoticia=noticianumero;
                showNoticia(noticianumero);
            /*location.href='noticia.html?var1='+noticianumero;*/}
          
          

          }