
var numnoticia;
var max;
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const requestURL = 'https://pekemir.github.io/noticias.json';
    const request = new XMLHttpRequest();
    const myH1=document.getElementById('h1primeranoticia2');
    const contenedortexto = document.getElementById("contenedorparatexto");
      
    const myp1=document.getElementById('p1primeranoticia2');
   
    const mypp1=document.getElementById('p2primeranoticia2');
   
    const fondo1=document.getElementById('primeranoticia2');
    var interval;
const TIEMPO_INTERVALO_MILESIMAS_SEG = 4000;
let posicionActual = 0;
let $imagen = document.querySelector('#primeranoticia2');

let intervalo;

var cantidaddenoticias;
var noticiass=null;
var IMAGENES=[];
var noticias=null;
var valorinicio;

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
        console.log(getString);
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        console.log(GET);
      
        var get = {};
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
               numnoticia=tmp[1];     
            console.log(tmp[1]);
           var numnoticia2= numnoticia.replace("#","")
            console.log(numnoticia2);
            numnoticia=numnoticia2;
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
       
       valorinicio=numero;
        noticias = noticiass['noticias'];
       console.log(noticias.length);
       console.log(valorinicio);
        max=noticias.length;
         //array de imagenes
        for (let index = 0; index < noticias[valorinicio].imagenes.length; index++) {
            var ruta='url(imagenes/noticias/'+ noticias[valorinicio].imagenes[index]+'.jpg)';
           IMAGENES[index]=ruta;
           fondo1.style.backgroundImage=ruta;
        };

        
        myH1.textContent = noticias[valorinicio].titulo;
          
          console.log(noticias[valorinicio].textolargo.length);
          myp1.textContent = noticias[valorinicio].textolargo[0];

console.log(noticias[valorinicio].textolargo);
          for (let index = 1; index < noticias[valorinicio].textolargo.length; index++) {
            var parrafo = document.createElement("p");
          parrafo.className="p1noticias";
          parrafo.textContent=noticias[valorinicio].textolargo[index];
          contenedortexto.appendChild(parrafo);
              console.log(noticias[valorinicio].textolargo[index]);
              
          }; 
          var enlace;

        for (let inn = 0; inn < noticias[valorinicio].enlace.length; inn++) {
            console.log(noticias[valorinicio].enlace[inn]);
            var parrafo = document.createElement("a");
            parrafo.className="p1noticias";
            enlace=noticias[valorinicio].enlace[inn];
            parrafo.href=enlace;
            parrafo.innerHTML=enlace;
          contenedortexto.appendChild(parrafo);
        };
         	
          
         
          mypp1.textContent = noticias[valorinicio].fecha;
          var ruta="url(imagenes/noticias/"+ noticias[valorinicio].imagen+".jpg)";
          fondo1.style.backgroundImage=ruta;
          if (IMAGENES.length>1) {
              interval=16000/IMAGENES.length;
              if (interval<4000) {interval=4000;
                  
              }
            playIntervalo(interval);
          }
         
        }
        function playIntervalo(tiempo) {
            intervalo = setInterval(pasarFoto, tiempo);
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
           
            $imagen.style.backgroundImage = IMAGENES[posicionActual];
            
           
        }

        function abrirnoticiasig(){
                var numero=parseInt(numnoticia, 10);

                console.log(numero+1);
                var noticianumero=numero+1;
                if (max>noticianumero){
                    numnoticia=noticianumero;
         
               location.href='noticia.html?var1='+noticianumero;}
              
              
          }
          function abrirnoticiasant(){
            var numero=parseInt(numnoticia, 10);

            console.log(numero+1);
            var noticianumero=numero-1;
            if (noticianumero>=0){
                numnoticia=noticianumero;
               
            location.href='noticia.html?var1='+noticianumero;}
          
          

          }
          function abrirotrapagina(){
            location.href='https://pekemir.github.io/imagenes/noticias/'+noticias[valorinicio].imagenes[posicionActual]+'.jpg';
           
          }