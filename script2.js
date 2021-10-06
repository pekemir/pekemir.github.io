   
   
   
   const header = document.querySelector('header');
    const section = document.querySelector('section');
    const requestURL = 'https://pekemir.github.io/superheroes.json';
    const request = new XMLHttpRequest();
   
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
    
  
  
 
function populateHeader(jsonObj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
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
 
  const noticias = noticiass['members'];

  var numeropagina=numero;
  
  
  console.log("numeropaginaes"+numeropagina);
  
cantidaddenoticias=noticias.length;
console.log("numerodenoticiases"+cantidaddenoticias);

var valorinicio;
var valorfinal;

switch (numeropagina) {
  case 1:
    valorinicio=cantidaddenoticias-1
  valorfinal=cantidaddenoticias-noticiasmostradas
    break;
    case 2:
    valorinicio=cantidaddenoticias-1-noticiasmostradas
  valorfinal=cantidaddenoticias-noticiasmostradas-noticiasmostradas
    break;
    case 3:
    valorinicio=cantidaddenoticias-1-noticiasmostradas-noticiasmostradas
  valorfinal=cantidaddenoticias-noticiasmostradas-noticiasmostradas-noticiasmostradas
  if (valorinicio<=3) {valorfinal=0
    
  }
    break;

  default:
    break;
}
console.log('valor inicioooooooooooooooo'+valorinicio);
console.log('valorfinallllllllllllllllllll'+valorfinal);
  /*for (var i =valorinicio; i >=valorfinal; i--) {*/
     
  /*  const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');*/
const myH11=document.getElementById('h1primeranoticia');
const myH22=document.getElementById('h1segundanoticia');
const myH33=document.getElementById('h1terceranoticia');
const myH44=document.getElementById('h1cuartanoticia');
const myH3=document.getElementById('p1primeranoticia');
const myH4=document.getElementById('p2primeranoticia');
const fondo=document.getElementById('primeranoticia');
const fondo2=document.getElementById('segundanoticia');
const fondo3=document.getElementById('terceranoticia');
const fondo4=document.getElementById('cuartanoticia');
 const ruta="url(media/"+ noticias[valorinicio].secretIdentity+".jpg)";

/*ruta="url(media/equipos.png)";*/
fondo.style.backgroundImage=ruta;
fondo2.style.backgroundImage=ruta;
fondo3.style.backgroundImage=ruta;
fondo4.style.backgroundImage=ruta;
    myH11.textContent = noticias[valorinicio].name;
    if(valorinicio-1>=0){
    myH22.textContent = noticias[valorinicio-1].name;}
    if(valorinicio-2>=0){
    myH33.textContent = noticias[valorinicio-2].name;}
    if(valorinicio-3>=0){
    myH44.textContent = noticias[valorinicio-3].name;}
    myH3.textContent = 'El equipo masculino de hockey del Club de Campo, se ha desplazado a Brasschaat (Bélgica) para disputar la EHL Cup, competición en la que se mide, este jueves 30 de septiembre, al Gantoise HC (19.30hs).';
    myH4.textContent = noticias[valorinicio].powers[1];
    controlpagina=numero;

    
  }/*}*/

