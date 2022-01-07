/*aparecerobjetos*/

function reveal() {
  var reveals = document.querySelectorAll(".js-scroll");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    
    console.log(elementTop);
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

/*aparecerobjetos metodo2*/
const header=document.getElementById('controlheader')
const scrollElements = document.querySelectorAll(".js-scrollheader");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
return (
    (elementTop +window.innerHeight-100<=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  ))
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)||-10
  );
};

const displayScrollElement = (element) => {
  header.classList.add("headeractivo");
};

const hideScrollElement = (element) => {
  header.classList.remove("headeractivo");
};

var control=1;
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (el.getBoundingClientRect().top==0) {
     control=1 
    }
   if (elementInView(el, 1.25)&& control==1) {
      displayScrollElement(el);
      control=0;
    } else if (elementOutofView(el)&& control==1) {
      console.log("RESTOOTRO");
      hideScrollElement(el)
    }
  })
}
/*fin aparecer objetos metodo2*/
window.addEventListener("scroll", () => { 
  handleScrollAnimation();
  reveal()
});
/*fin aparecer objetos*/

/*php*/
const $imagennoticiasfija1 = document.getElementById('articulonoticia1');
const $imagennoticiasfija2 = document.getElementById('articulonoticia2');
const $imagennoticiasfija3 = document.getElementById('articulonoticia3');
const fechanoticiasfija1=document.getElementById('noticia1fecha');
const fechanoticiasfija2=document.getElementById('noticia2fecha');
const fechanoticiasfija3=document.getElementById('noticia3fecha');
const titulonoticiasfija1= document.getElementById('noticia1titulo');
const titulonoticiasfija2= document.getElementById('noticia2titulo');
const titulonoticiasfija3= document.getElementById('noticia3titulo');
//const fechanoticiasfija1=document.getElementById('dp2div1doscarruselpiefechanoticiasn1');
//const textocortonoticiasfija1=document.getElementById('dp2div1doscarruselpieinicionoticia1texto');
//const titulonoticiasfija2= document.getElementById('dp2div1doscarruselimagentitulotitulonotician2');
//const fechanoticiasfija2=document.getElementById('dp2div1doscarruselpiefechanoticiasn2');
//const textocortonoticiasfija2=document.getElementById('dp2div1doscarruselpieinicionoticia2texto');

let intervalonoticias;
var noticiassnoticias=null;
var IMAGENESnoticias;
var TITULOSnoticias;
var FECHASnoticias;
var TEXTOnoticias;
var noticiass=null;
var noticias= null;
window.onload= function(){cargarimagenesnoticiasonload();}
function cargarimagenesnoticiasonload(){
  $.ajax({
      url: 'http://localhost:82/php/noticias.php',
      type: 'POST',
      data: "nombre=5&pagina=1",
      success: function(data){
      console.log(data);
      
      const noticias4= JSON.parse(data);
      noticias=noticias4;
      console.log(noticias);

      let array = noticias.Noticias[1].imagenes.split(',',1);
  let ruta1="url(imagenes/noticias/"+ array[0]+")";
  array = noticias.Noticias[2].imagenes.split(',',1);
  let ruta2="url(imagenes/noticias/"+ array[0]+")";
  array = noticias.Noticias[3].imagenes.split(',',1);
  let ruta3="url(imagenes/noticias/"+ array[0]+")";
  array = noticias.Noticias[4].imagenes.split(',',1);
  let ruta4="url(imagenes/noticias/"+ array[0]+")";
     IMAGENESnoticias = [
         ruta1,ruta2,ruta3,ruta4
       ];
       console.log(IMAGENESnoticias);
       $imagennoticiasfija1.style.backgroundImage = "var(--degradadonoticia),"+IMAGENESnoticias[0];
        $imagennoticiasfija2.style.backgroundImage = "var(--degradadonoticia),"+IMAGENESnoticias[1];
       $imagennoticiasfija3.style.backgroundImage = "var(--degradadonoticia),"+IMAGENESnoticias[2];
       $imagennoticiasfija1.src=""; 
       $imagennoticiasfija2.src="";
       $imagennoticiasfija3.src="";
      
       
       
       TITULOSnoticias=[
          ''+noticias.Noticias[1].titulo,
         ''+ noticias.Noticias[2].titulo,
          ''+noticias.Noticias[3].titulo,
          ''+noticias.Noticias[4].titulo,
       ];
       titulonoticiasfija1.textContent=TITULOSnoticias[0];
       titulonoticiasfija2.textContent=TITULOSnoticias[1];
       titulonoticiasfija3.textContent=TITULOSnoticias[2];
       TEXTOnoticias=[
          ''+noticias.Noticias[1].noticiacorta,
          ''+ noticias.Noticias[2].noticiacorta,
           ''+noticias.Noticias[3].noticiacorta,
           ''+noticias.Noticias[4].noticiacorta,
       ];
       FECHASnoticias=[
          ''+noticias.Noticias[1].fecha,
          ''+ noticias.Noticias[2].fecha,
           ''+noticias.Noticias[3].fecha,
           ''+noticias.Noticias[4].fecha,
       ]
       fechanoticiasfija1.textContent=FECHASnoticias[0]
       fechanoticiasfija2.textContent=FECHASnoticias[1]
       fechanoticiasfija3.textContent=FECHASnoticias[2]
       console.log(TEXTOnoticias);
      // next(); 
      }
    });}
               function mostrarmastexto(id) {
                 console.log("ahora si");
                 const mostrartexto=document.getElementById(id);
                 mostrartexto.style.display='block';
                
               }