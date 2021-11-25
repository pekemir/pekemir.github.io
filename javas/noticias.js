const header = document.querySelector('header');
    const section = document.querySelector('section');
    const requestURL = 'https://pekemir.github.io/noticias.json';
    const request = new XMLHttpRequest();
    var valorinicio;
    var cantidaddenoticias;
    var noticiasmostradas=4;
    var noticiass=null;
    var controlpagina=0;
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    const superNoticias = request.response;
    noticiass=superNoticias;
    console.log(noticiass);
    showNoticias(1);
  }

function abrirnoticia(posicion){
  console.log("posicionnnn"+posicion);
  console.log(controlpagina);
  console.log(valorinicio);
  var noticianumero=valorinicio+1-posicion;
  console.log(noticianumero);
if(noticianumero>=0){
  location.href='noticia.html?var1='+noticianumero;}

}
function primerapagina(){
  showNoticias(1)
}
function ultimapagina(){
  var pagina=Math.round( (cantidaddenoticias/noticiasmostradas)+0.5);
  console.log('paginaaaaaaaaaaaaaaaaaaaaa'+pagina);
  showNoticias(pagina);
}
function paginasiguiente(){
  
  console.log(cantidaddenoticias);
  var pagina=Math.round( (cantidaddenoticias/noticiasmostradas)+0.5);
  console.log(pagina);
  if (controlpagina<pagina){
    controlpagina=controlpagina+1
  }
  console.log(pagina);
  showNoticias(controlpagina)
}
function paginaanterior(){
  var pagina=1;
  if (controlpagina>1){
    pagina=controlpagina-1
  }
  showNoticias(pagina)

}

function showNoticias(numero) {
  
  if(controlpagina==0){
    controlpagina=numero;
  }
  console.log(numero+'numeroooo');
  console.log(noticiasmostradas);
  console.log('controlpagina'+controlpagina);
  console.log("clickado");
 const noticias = noticiass['noticias'];
var numeropagina=numero;
  console.log("numeropaginaes"+numeropagina);
  cantidaddenoticias=noticias.length;
console.log("numerodenoticiases"+cantidaddenoticias);

var valorfinal;
var numeroresta=(numeropagina-1)*noticiasmostradas;
var numeroreal=cantidaddenoticias-1;

valorinicio=numeroreal-numeroresta;
valorfinal=cantidaddenoticias-(numeropagina*noticiasmostradas);
if (valorinicio<0) {valorinicio=numeroreal;
  
}
if (valorfinal<0) {valorfinal=cantidaddenoticias-noticiasmostradas;
  
}

console.log('valor inicioooooooooooooooo'+valorinicio);
console.log('valorfinallllllllllllllllllll'+valorfinal);
 if (valorinicio>=0){ 
const myH1=document.getElementById('h1primeranoticia');
const myH2=document.getElementById('h1segundanoticia');
const myH3=document.getElementById('h1terceranoticia');
const myH4=document.getElementById('h1cuartanoticia');
const myp1=document.getElementById('p1primeranoticia');
const myp2=document.getElementById('p1segundanoticia');
const myp3=document.getElementById('p1terceranoticia');
const myp4=document.getElementById('p1cuartanoticia');
const mypp1=document.getElementById('p2primeranoticia');
const mypp2=document.getElementById('p2segundanoticia');
const mypp3=document.getElementById('p2terceranoticia');
const mypp4=document.getElementById('p2cuartanoticia');
const fondo1=document.getElementById('primeranoticia');
const fondo2=document.getElementById('segundanoticia');
const fondo3=document.getElementById('terceranoticia');
const fondo4=document.getElementById('cuartanoticia');

    if(valorinicio>=0){
    myH1.textContent = noticias[valorinicio].titulo;
    myp1.textContent = noticias[valorinicio].textocorto;
    mypp1.textContent = noticias[valorinicio].fecha;
    var ruta="url(imagenes/noticias/"+ noticias[valorinicio].imagen+".jpg)";
    console.log(ruta);
    fondo1.style.backgroundImage=ruta;
  }
    if(valorinicio-1>=0){
    myH2.textContent = noticias[valorinicio-1].titulo;
    myp2.textContent = noticias[valorinicio-1].textocorto;
    mypp2.textContent = noticias[valorinicio-1].fecha;
    var ruta="url(imagenes/noticias/"+ noticias[valorinicio-1].imagen+".jpg)";
    fondo2.style.backgroundImage=ruta;
  }else{
    myH2.textContent = "";
    myp2.textContent = "";
    mypp2.textContent = "";
    fondo2.style.backgroundImage="";
  }
  
    if(valorinicio-2>=0){
    myH3.textContent = noticias[valorinicio-2].titulo;
    myp3.textContent = noticias[valorinicio-2].textocorto;
    mypp3.textContent = noticias[valorinicio-2].fecha;
    var ruta="url(imagenes/noticias/"+ noticias[valorinicio-2].imagen+".jpg)";
    fondo3.style.backgroundImage=ruta;
  }
  else{
    myH3.textContent = "";
  myp3.textContent = "";
  mypp3.textContent = "";
    fondo3.style.backgroundImage="";
  }
    if(valorinicio-3>=0){
    myH4.textContent = noticias[valorinicio-3].titulo;
    myp4.textContent = noticias[valorinicio-3].textocorto;
    mypp4.textContent = noticias[valorinicio-3].fecha;
    var ruta="url(imagenes/noticias/"+ noticias[valorinicio-3].imagen+".jpg)";
    fondo4.style.backgroundImage=ruta;}
    else{
      myH4.textContent = "";
    myp4.textContent = "";
    mypp4.textContent = "";
      fondo4.style.backgroundImage="";
    }

   
    controlpagina=numero;
    var mydiv=document.getElementById('inicioarticuloclass');
    mydiv.scrollTop=0;
  
    
}else{
  console.log("elseee");

}}

