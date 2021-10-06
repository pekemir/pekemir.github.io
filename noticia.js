
var numnoticia;

window.onload = function getGET()
{
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
        
        }
        return get;
       
    }}
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const requestURL = 'https://pekemir.github.io/noticias.json';
    const request = new XMLHttpRequest();
    
    
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    const superNoticias = request.response;
    noticiass=superNoticias;
    
    showNoticia(numnoticia);}

    function showNoticia(numero) {
        var valorinicio=numero;
        
       const noticias = noticiass['noticias'];
     
      const myH1=document.getElementById('h1primeranoticia2');
      
      const myp1=document.getElementById('p1primeranoticia2');
     
      const mypp1=document.getElementById('p2primeranoticia2');
     
      const fondo1=document.getElementById('primeranoticia2');
     
      
         
          myH1.textContent = noticias[valorinicio].titulo;
          myp1.textContent = noticias[valorinicio].textolargo;
          mypp1.textContent = noticias[valorinicio].fecha;
          var ruta="url(media/"+ noticias[valorinicio].imagen+".jpg)";
          fondo1.style.backgroundImage=ruta;
       
         
         
        
          
      }