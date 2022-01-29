const $bloquelistanoticias = document.getElementById('listadonoticias');
const $bloquenoticia= document.getElementById('noticiasuelta');
const $imagennoticiasfijan = document.getElementById('articulonotician');
const $imagennoticiasfija1 = document.getElementById('articulonoticia1');
const $imagennoticiasfija2 = document.getElementById('articulonoticia2');
const $imagennoticiasfija3 = document.getElementById('articulonoticia3');
const $imagennoticiasfija4 = document.getElementById('articulonoticia4');
const fechanoticiasfijan=document.getElementById('noticiafechan');
const fechanoticiasfija1=document.getElementById('noticia1fecha');
const fechanoticiasfija2=document.getElementById('noticia2fecha');
const fechanoticiasfija3=document.getElementById('noticia3fecha');
const fechanoticiasfija4=document.getElementById('noticia4fecha');
const titulonoticiasfijan= document.getElementById('noticiatitulon');
const titulonoticiasfija1= document.getElementById('noticia1titulo');
const titulonoticiasfija2= document.getElementById('noticia2titulo');
const titulonoticiasfija3= document.getElementById('noticia3titulo');
const titulonoticiasfija4= document.getElementById('noticia4titulo');
const $miniimagen0= document.getElementById('miniimagen0');
const $miniimagen1= document.getElementById('miniimagen1');
const $miniimagen2= document.getElementById('miniimagen2');
//const fechanoticiasfija1=document.getElementById('dp2div1doscarruselpiefechanoticiasn1');
//const textocortonoticiasfija1=document.getElementById('dp2div1doscarruselpieinicionoticia1texto');
//const titulonoticiasfija2= document.getElementById('dp2div1doscarruselimagentitulotitulonotician2');
//const fechanoticiasfija2=document.getElementById('dp2div1doscarruselpiefechanoticiasn2');
const textonoticia=document.getElementById('textonoticia');



var IMAGENESnoticias;
var IMAGENESnoticiasuelta=[];
var TITULOSnoticias;
var FECHASnoticias;
var TEXTOnoticias;

var noticias= null;
var controlador=1;
var numertotaldenoticias=0;
var controlminimagen0=0;
var controlminimagen1=1;
var controlminimagen2=2;
var lengminimagen=0;

window.onload= function(){cargarimagenesnoticiasonload(controlador);

 
}
function clicknoticia(numero) {
  $bloquelistanoticias.style.display='none';
  $bloquenoticia.style.display='block'
  console.log(numero+1);
  console.log(noticias.Noticias[numero+1].id);
  abrirnoticia(numero);
}
function abrirnoticia(numero){
  console.log(TEXTOnoticias);
  textonoticia.innerText=TEXTOnoticias[numero]
  controlminimagen0=0;
  controlminimagen1=1;
  controlminimagen2=2;
  IMAGENESnoticiasuelta=[];
  console.log("noticia numero"+numero);
  let array = noticias.Noticias[numero+1].imagenes.split(',',6);
  console.log(array);
  console.log(array.length);
  for (let index = 0; index < array.length; index++) {
    let ruta1="imagenes/noticias/"+ array[index];
    IMAGENESnoticiasuelta[index]=ruta1;
    
  }
  lengminimagen=IMAGENESnoticiasuelta.length;
  console.log(IMAGENESnoticiasuelta);
 

  titulonoticiasfijan.textContent=TITULOSnoticias[numero];
  fechanoticiasfijan.textContent=FECHASnoticias[numero];
  
  if (IMAGENESnoticiasuelta.length>=3) {
    $miniimagen0.style.display='block';
    $miniimagen2.style.display='block';
    $miniimagen1.src= IMAGENESnoticiasuelta[1];
    $imagennoticiasfijan.src = IMAGENESnoticiasuelta[1];
    $miniimagen0.src= IMAGENESnoticiasuelta[0];
    $miniimagen2.src= IMAGENESnoticiasuelta[2];
  }
  else
  {$miniimagen0.style.display='none';
  $miniimagen2.style.display='none';
  $miniimagen1.src= IMAGENESnoticiasuelta[0];
  $imagennoticiasfijan.src = IMAGENESnoticiasuelta[0];
  }
  }
  function avanzarmiimagen() {
    console.log(lengminimagen+"lenght");
    if (controlminimagen0+1>=lengminimagen) {
      controlminimagen0=0;}
      else{controlminimagen0=controlminimagen0+1}
      if (controlminimagen1+1>=lengminimagen) {
        controlminimagen1=0;}
        else{controlminimagen1=controlminimagen1+1}
        if (controlminimagen2+1>=lengminimagen) {
          controlminimagen2=0;}
          else{controlminimagen2=controlminimagen2+1}
      console.log(controlminimagen0);
      console.log(controlminimagen1);
      console.log(controlminimagen2);
    $miniimagen0.src= IMAGENESnoticiasuelta[controlminimagen0];
    $miniimagen1.src= IMAGENESnoticiasuelta[controlminimagen1];
    $miniimagen2.src= IMAGENESnoticiasuelta[controlminimagen2];
    $imagennoticiasfijan.src = IMAGENESnoticiasuelta[controlminimagen1];
    
      
    }
    function retrocederimagen() {
      console.log(lengminimagen+"lenght");
    if (controlminimagen0-1<0) {
      controlminimagen0=lengminimagen-1;}
      else{controlminimagen0=controlminimagen0-1}

      if (controlminimagen1-1<0) {
        controlminimagen1=lengminimagen-1;}
        else{controlminimagen1=controlminimagen1-1}
        if (controlminimagen2-1<0) {
          controlminimagen2=lengminimagen-1;}
          else{controlminimagen2=controlminimagen2-1}

      console.log(controlminimagen0);
      console.log(controlminimagen1);
      console.log(controlminimagen2);
    $miniimagen0.src= IMAGENESnoticiasuelta[controlminimagen0];
    $miniimagen1.src= IMAGENESnoticiasuelta[controlminimagen1];
    $miniimagen2.src= IMAGENESnoticiasuelta[controlminimagen2];
    $imagennoticiasfijan.src = IMAGENESnoticiasuelta[controlminimagen1];
    
    }

    
 
  function mostrarminimagen(imagen) {
    $imagennoticiasfijan.src = imagen;
    
  }
function volveranoticias() {
  $bloquelistanoticias.style.display='block';
  $bloquenoticia.style.display='none'
}
function numerodepagina(numero) {
  let valor1=((numero)*4);
  if (valor1>numertotaldenoticias) {
  }
  else{controlador=numero}
  console.log(controlador);
  cargarimagenesnoticiasonload(controlador);
  
  
}
function unamas() {
  let valor1=((controlador)*4);
  if (valor1>numertotaldenoticias) {
  }
  else{controlador=controlador+1}
  console.log(controlador);
  cargarimagenesnoticiasonload(controlador);
  }
  function unamenos() {
    if (controlador-1<=0) {
      controlador=1;
      
    } else {controlador=controlador-1
      
    }
    console.log(controlador);
    cargarimagenesnoticiasonload(controlador);
    }
    function primerapag() {
      controlador=1;
      cargarimagenesnoticiasonload(controlador)
      
    }
    function ultimapag() {
      controlador=Math.round( numertotaldenoticias/4);
      console.log(controlador);
      cargarimagenesnoticiasonload(controlador)
    }

function numerodesemana(){
	var now=new Date(),i=0,f,sem=(new Date(now.getFullYear(), 0,1).getDay()>0)?1:0;
	while( (f=new Date(now.getFullYear(), 0, ++i)) < now ){
		if(!f.getDay()){
			sem++;
		}
	}
	return sem;
}


  function cargarimagenesnoticiasonload(numero){
  $.ajax({
      url: 'php/noticias.php',
      type: 'POST',
      data: "nombre="+numero+"&pagina=1",
      success: function(data){
      
      
      const noticias4= JSON.parse(data);
      noticias=noticias4;
      console.log(noticias);
      numertotaldenoticias=noticias.Noticias[0].total;

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
       $imagennoticiasfija4.style.backgroundImage = "var(--degradadonoticia),"+IMAGENESnoticias[3];
       $imagennoticiasfija1.src=""; 
       $imagennoticiasfija2.src="";
       $imagennoticiasfija3.src="";
       $imagennoticiasfija4.src="";
      
       
       
       TITULOSnoticias=[
          ''+noticias.Noticias[1].titulo,
         ''+ noticias.Noticias[2].titulo,
          ''+noticias.Noticias[3].titulo,
          ''+noticias.Noticias[4].titulo,
       ];
       titulonoticiasfija1.textContent=TITULOSnoticias[0];
       titulonoticiasfija2.textContent=TITULOSnoticias[1];
       titulonoticiasfija3.textContent=TITULOSnoticias[2];
       titulonoticiasfija4.textContent=TITULOSnoticias[3];
       TEXTOnoticias=[
          ''+noticias.Noticias[1].noticiaentera,
          ''+ noticias.Noticias[2].noticiaentera,
           ''+noticias.Noticias[3].noticiaentera,
           ''+noticias.Noticias[4].noticiaentera,
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
       fechanoticiasfija4.textContent=FECHASnoticias[3]
       
      // next(); 
      }
    });}
  