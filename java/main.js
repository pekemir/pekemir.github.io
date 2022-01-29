

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
var partidosprox=null;
var partidos=null;


window.onload= function(){cargarimagenesnoticiasonload();

 
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


  function cargarimagenesnoticiasonload(){
  $.ajax({
      url: 'php/noticias.php',
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
  
             

               var controlprximospartidos=0;
               function mostrarproximospartidos() {
                const mostrartexto=document.getElementById('contenedorproximospartidos');
                if ( mostrartexto.style.display=='block') {
                  mostrartexto.style.display='none';
                } else {mostrartexto.style.display='block';
                if (controlprximospartidos==0) {
                  cargarproximospartidos(numerodesemana());
                 
                }   }                           }

                var controlresultadospartidos=0;
                function mostrarresultadospartidos() {
                 const mostrartexto=document.getElementById('contenedorresultadospartidos');
                 if ( mostrartexto.style.display=='block') {
                   mostrartexto.style.display='none';
                 } else {mostrartexto.style.display='block';
                 if (controlresultadospartidos==0) {
                   cargarresultados(numerodesemana());
                 }   }                           }

           
              


               function crearproximopartido(division,dia,hora,escudolocal,equipolocal,escudovisitante,equipovisitante,ubicacion) {
                
                 var partido = document.createElement("div");
                 partido.classList.add('partido')
                 var currentDiv = document.getElementById("contenedorproximospartidos");
                 currentDiv.appendChild(partido);

                 var divisionn=document.createElement("h5");
                 divisionn.classList.add('division');
                 divisionn.textContent=division;
                 partido.appendChild(divisionn);

                 var horaa= document.createElement("h4");
                 horaa.classList.add('hred');
                 horaa.textContent=dia;
                 partido.appendChild(horaa);
                 var horaa= document.createElement("h4");
                 horaa.classList.add('hred');
                 horaa.textContent=hora;
                 partido.appendChild(horaa);

                 var escudos=document.createElement("div");
                 escudos.classList.add('escudos');
                 partido.appendChild(escudos);

                  var equipol=document.createElement("div");
                 equipol.classList.add('equipo');
                 escudos.appendChild(equipol)

                 var escudolocall=document.createElement("img");
                escudolocall.classList.add("escudo");
                escudolocall.src  = "imagenes/escudos/"+escudolocal;
                escudolocall.alt="escudo local";
                 equipol.appendChild(escudolocall);

                 var nombreequipolocal=document.createElement("h5");
                 nombreequipolocal.classList.add('nombreequipo');
                 nombreequipolocal.textContent=equipolocal;
                 equipol.appendChild(nombreequipolocal);

                 var guion=document.createElement("p");
                 guion.textContent="-";
                 escudos.appendChild(guion);

                 var equipov=document.createElement("div");
                 equipov.classList.add('equipo');
                 escudos.appendChild(equipov)

                 var escudovis=document.createElement("img");
                escudovis.classList.add("escudo");
                escudovis.src  = "imagenes/escudos/"+escudovisitante;
                escudovis.alt="escudo visitante";
                 equipov.appendChild(escudovis);

                 var nombreequipovis=document.createElement("h5");
                 nombreequipovis.classList.add('nombreequipo');
                 nombreequipovis.textContent=equipovisitante;
                 equipov.appendChild(nombreequipovis);

                 var lugar=document.createElement("h4");
                 lugar.textContent=ubicacion;
                 partido.appendChild(lugar);
                 console.log("creado");
               }
               function crearpartidoresultado(division,dia,escudolocal,equipolocal,escudovisitante,equipovisitante,ubicacion,gollocal,golvis) {
                
                var partido = document.createElement("div");
                partido.classList.add('partido')
                var currentDiv = document.getElementById("contenedorresultadospartidos");
                currentDiv.appendChild(partido);

                var divisionn=document.createElement("h5");
                divisionn.classList.add('division');
                divisionn.textContent=division;
                partido.appendChild(divisionn);

                var horaa= document.createElement("h4");
                horaa.classList.add('hred');
                horaa.textContent=dia;
                partido.appendChild(horaa);

                var escudos=document.createElement("div");
                escudos.classList.add('escudos');
                partido.appendChild(escudos);

                 var equipol=document.createElement("div");
                equipol.classList.add('equipo');
                escudos.appendChild(equipol)

                var escudolocall=document.createElement("img");
               escudolocall.classList.add("escudo");
               escudolocall.src  = "imagenes/escudos/"+escudolocal;
               escudolocall.alt="escudo local";
                equipol.appendChild(escudolocall);

                var nombreequipolocal=document.createElement("h5");
                nombreequipolocal.classList.add('nombreequipo');
                nombreequipolocal.textContent=equipolocal;
                equipol.appendChild(nombreequipolocal);

                var goleslocal=document.createElement("h5");
                goleslocal.textContent=gollocal;
                equipol.appendChild(goleslocal);

                var guion=document.createElement("p");
                guion.textContent="-";
                escudos.appendChild(guion);

                var equipov=document.createElement("div");
                equipov.classList.add('equipo');
                escudos.appendChild(equipov)

                var escudovis=document.createElement("img");
               escudovis.classList.add("escudo");
               escudovis.src  = "imagenes/escudos/"+escudovisitante;
               escudovis.alt="escudo visitante";
                equipov.appendChild(escudovis);

                var nombreequipovis=document.createElement("h5");
                nombreequipovis.classList.add('nombreequipo');
                nombreequipovis.textContent=equipovisitante;
                equipov.appendChild(nombreequipovis);

                var golesvis=document.createElement("h5");
                golesvis.textContent=golvis;
                equipov.appendChild(golesvis);

                var lugar=document.createElement("h4");
                lugar.textContent=ubicacion;
                partido.appendChild(lugar);
                console.log("creado");
              }
              function cargarproximospartidos(semana){
                console.log("semana"+semana);
                controlprximospartidos=1 ;
                  $.ajax({
                    url: 'php/partidos.php',
                    type: 'POST',
                    data: "nombre="+semana+"&pagina=1",
                    success: function(data){
                    console.log(data);
                    
                    const partidosprox4= JSON.parse(data);
                    partidosprox=partidosprox4;
                    console.log(partidosprox);
                    for (let a = 0; a < partidosprox.Partidos.length; a++) {
                     
                  
             
              console.log("inicio");
                    crearproximopartido(partidosprox.Partidos[a].categoria+" - "+partidosprox.Partidos[a].campeonato,
                    formatofecha(partidosprox.Partidos[a].dia),
                    partidosprox.Partidos[a].hora,
                    partidosprox.Partidos[a].esclocal+".png",
                    partidosprox.Partidos[a].eqlocal,
                    partidosprox.Partidos[a].esvis+".png",
                    partidosprox.Partidos[a].eqvis,
                    partidosprox.Partidos[a].lugar)
                    // next(); 
                    console.log("fin");
                    }}
                  }); 
                }
                function formatofecha(input){
                  var datePart = input.match(/\d+/g),
                  year = datePart[0].substring(0,4), // get only two digits
                  month = datePart[1], day = datePart[2];
      
                  return day+'-'+month+'-'+year;
      }
      function cargarresultados(semana) {
        controlresultadospartidos=1 ;
        $.ajax({
          url: 'php/partidosresultados.php',
          type: 'POST',
          data: "nombre="+semana+"&pagina=1",
          success: function(data){
          console.log(data);
          
          const partidos4= JSON.parse(data);
          partidos=partidos4;
          console.log(partidos);
          for (let a = 0; a < partidos.Partidos.length; a++) {
           
        
   
    console.log("inicio");
          crearpartidoresultado(partidos.Partidos[a].categoria+" - "+partidos.Partidos[a].campeonato,
          formatofecha(partidos.Partidos[a].dia),
         
          partidos.Partidos[a].esclocal+".png",
          partidos.Partidos[a].eqlocal,
          partidos.Partidos[a].esvis+".png",
          partidos.Partidos[a].eqvis,
          partidos.Partidos[a].lugar,
          partidos.Partidos[a].golocal,
          partidos.Partidos[a].golvis)
          // next(); 
          console.log("fin");
          }}
        }); 
      }
    