 var controlclasificacion=0;
var controlresultados=0;
var controlcalendario=0;
var competicion;
var competiciones= null;
const $titulocompeti = document.getElementById('titulocompeticion');

window.onload=function(){
  let compet
compet=getGET();
competicion=compet.competicion;
console.log(competicion);
obtenertablas(1);


}
function obtenertablas(competicion) {
  
    $.ajax({
        url: 'php/competiciones.php',
        type: 'POST',
        data: "competicion="+competicion+"&pagina=1",
        success: function(data){
        
        
        const compet= JSON.parse(data);
        competiciones=compet;
        console.log(competiciones);
        $titulocompeti.textContent=competiciones['nombreliga'];
        proxpartidos();
      }
    });}

function getGET()//obtener competicion
{
    // capturamos la url
    var loc = document.location.href;
    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        var get = {};
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return get;
    }
}
function proxpartidos() {
  let controlunpartido=competiciones['proxpartidos'][0].jornada;
  let controljornadaprox=0;
  for (let i = 0; i <competiciones['proxpartidos'].length ; i++) {
    if (controljornadaprox!=competiciones['proxpartidos'][i].jornada) {
      controljornadaprox=competiciones['proxpartidos'][i].jornada;
      if (controljornadaprox!=controlunpartido) {
       break;
      }
      var partido = document.createElement("div");
  partido.classList.add('partido')
  var currentDiv = document.getElementById("artprox");
  currentDiv.appendChild(partido);
  var divisionn=document.createElement("h5");
  divisionn.classList.add('division');
  divisionn.textContent= "JORNADA"+competiciones['proxpartidos'][i].jornada;
  partido.appendChild(divisionn);}
  crearproxpartido(
    "artprox",
    competiciones['proxpartidos'][i].eslocal+".png",
    competiciones['proxpartidos'][i].eqlocal,
    competiciones['proxpartidos'][i].esvis+".png",
    competiciones['proxpartidos'][i].eqvis,
    
    competiciones['proxpartidos'][i].dia,
    competiciones['proxpartidos'][i].hora,
    competiciones['proxpartidos'][i].lugar,
   )}
  
}
function mostrarclasificacion() {
   console.log("mostrar");
   console.log(controlclasificacion);
   
    const mostrartexto=document.getElementById('artclasificacion');
    if ( mostrartexto.style.display=='block') {
      mostrartexto.style.display='none';
    } else {mostrartexto.style.display='block';
     }
     console.log("fin");
     if(controlclasificacion==0) {
        console.log("fin");
        ponerclasificacion()
       controlclasificacion=1;
    }
   }
   function tablatitulo(titulo){ //para una linea que ocupe varios espacios
    var hilera = document.createElement("tr");
    var celda = document.createElement("th");
    celda.colSpan="7"
    var textoCelda = document.createTextNode(titulo);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
    tblBody.appendChild(hilera);
   }
 
       //crea la linea de recuadros larga
  function tablaposicionequiposlarga(posicion,escudo,nequipo,jugados,gan,emp,per,gf,gc,dg,ptos) {
        var hilera = document.createElement("tr");
    
    creartd(posicion,hilera);
    creartdescudo(escudo,hilera);
    creartd(nequipo,hilera);
    creartd(jugados,hilera);
    creartd(gan,hilera);
    creartd(emp,hilera);
    creartd(per,hilera);
    creartd(gf,hilera);
    creartd(gc,hilera);
    creartd(dg,hilera);
    creartd(ptos,hilera);
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
    
      }
      //crea la linea de recuadros corta
       function tablaposicionequipo(posicion,escudo,nequipo,jugados,gan,emp,per,ptos) {        
        var hilera = document.createElement("tr");
            creartd(posicion,hilera);
            creartdescudo(escudo,hilera);
            creartdcentrado(nequipo,hilera);
            creartd(jugados,hilera);
            creartd(gan,hilera);
            creartd(emp,hilera);
            creartd(per,hilera);
            creartd(ptos,hilera);
        tblBody.appendChild(hilera);
      }
       //crea cada recuadro de linea
       function creartd(dato,hilera ) { 
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(dato);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
          }
           //crea cada recuadro alinacion
           function creartdcentrado(dato,hilera ) { 
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(dato);
            celda.classList.add("centrado")
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
              }

     // crea linea de titulo
      function tablalineacabecero() {        
        var hilera = document.createElement("tr");
            crearth("",hilera,3);
           
            crearth("J",hilera,1);
            crearth("G",hilera,1);
            crearth("E",hilera,1);
            crearth("P",hilera,1);
            crearth("PTS",hilera,1);
        tblBody.appendChild(hilera);
      }
       //crea cuadro de titulo
  function crearth(dato,hilera,columnas ) {
         
    var celda = document.createElement("th");
    celda.colSpan=columnas
    celda.scope="col";
    var textoCelda = document.createTextNode(dato);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
        
      }
    //crea cuadro de imagen
      function creartdescudo(dato,hilera ) { 
            var celda = document.createElement("td");
            if (dato!="") {
              var celda2 = document.createElement('img');
            celda2.src="imagenes/escudos/"+dato;
            }else{
              var celda2 = document.createTextNode("");
            }
            
       
        celda.appendChild(celda2);
        hilera.appendChild(celda);
            
          }
        
   function ponerclasificacion() {
             body=document.getElementById("tablaclasificacion");
            tabla   = document.createElement("table");
            tabla.classList.add("tablaclasificacion");
            tblBody = document.createElement("tbody");
                       tablalineacabecero();
            for (let i = 0; i <competiciones['clasificacion'].length ; i++) {
                var pos;
               pos= i+1+"ª"
                
               tablaposicionequipo(
                pos,
                competiciones['clasificacion'][i].escudoesquipo+".png",
                competiciones['clasificacion'][i].nombreequipo,
                competiciones['clasificacion'][i].partidosj,
                competiciones['clasificacion'][i].partidosg,
                competiciones['clasificacion'][i].partidose,
                competiciones['clasificacion'][i].partidosp,
                competiciones['clasificacion'][i].puntos)
                 };// posiciona el <tbody> debajo del elemento <table>
           tabla.appendChild(tblBody);
           // appends <table> into <body>
               body.appendChild(tabla);
           // modifica el atributo "border" de la tabla y lo fija a "2";
            // tabla.setAttribute("border", "2");
            console.log("cargadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
       }
     function mostrarresultados() {
    if (controlresultados==0) {
        ponerresultados();
        controlresultados=1;
    }
    const mostrartexto=document.getElementById('artresultados');
    if ( mostrartexto.style.display=='block') {
      mostrartexto.style.display='none';
    } else {mostrartexto.style.display='block';
     }
   }
   function ponerresultados(){
    let controljornada=0;
    
    for (let i = 0; i <competiciones['partidos'].length ; i++) {
      if (controljornada!=competiciones['partidos'][i].jornada) {
        var partido = document.createElement("div");
    partido.classList.add('partido')
    var currentDiv = document.getElementById("artresultados");
    currentDiv.appendChild(partido);
    var divisionn=document.createElement("h5");
    divisionn.classList.add('division');
    divisionn.textContent= "JORNADA"+competiciones['partidos'][i].jornada;
    partido.appendChild(divisionn);
    controljornada=competiciones['partidos'][i].jornada
      }
     
     crearresultado(
      
     
      competiciones['partidos'][i].eslocal+".png",
      competiciones['partidos'][i].eqlocal,
      competiciones['partidos'][i].esvis+".png",
      competiciones['partidos'][i].eqvis,
      
      competiciones['partidos'][i].gollocal,
      competiciones['partidos'][i].golvis,
     )};
   }
  
   
  
   function mostrarcalendario() {
    if (controlcalendario==0) {
        ponercalendario();
        controlcalendario=1;
    }
    const mostrartexto=document.getElementById('artcalendario');
    if ( mostrartexto.style.display=='block') {
        mostrartexto.style.display='none';
    } else {mostrartexto.style.display='block';
     }
   }
   function ponercalendario(){
    let controljornada=0;
    for (let i = 0; i <competiciones['proxpartidos'].length ; i++) {
      if (controljornada!=competiciones['proxpartidos'][i].jornada) {
        var partido = document.createElement("div");
    partido.classList.add('partido')
    var currentDiv = document.getElementById("artcalendario");
    currentDiv.appendChild(partido);
    var divisionn=document.createElement("h5");
    divisionn.classList.add('division');
    divisionn.textContent= "JORNADA"+competiciones['proxpartidos'][i].jornada;
    partido.appendChild(divisionn);
    controljornada=competiciones['proxpartidos'][i].jornada
      }
     
     crearproxpartido(
      
     "artcalendario",
      competiciones['proxpartidos'][i].eslocal+".png",
      competiciones['proxpartidos'][i].eqlocal,
      competiciones['proxpartidos'][i].esvis+".png",
      competiciones['proxpartidos'][i].eqvis,
      
      competiciones['proxpartidos'][i].dia,
      competiciones['proxpartidos'][i].hora,
      competiciones['proxpartidos'][i].lugar,
     )};
   }
  
function crearresultado(escudolocal,equipolocal,escudovisitante,equipovisitante,gollocal,golvis) {
         console.log("crearrsultado");       
    var partido = document.createElement("div");
    partido.classList.add('partido')
    var currentDiv = document.getElementById("artresultados");
    currentDiv.appendChild(partido);
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

    var goleslocal=document.createElement("p");
    goleslocal.textContent=gollocal;
    escudos.appendChild(goleslocal);

    var guion=document.createElement("p");
    guion.textContent="-";
    escudos.appendChild(guion);

    var golesvis=document.createElement("p");
    golesvis.textContent=golvis;
    escudos.appendChild(golesvis);

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

   

    

  }
  function crearproxpartido(donde,escudolocal,equipolocal,escudovisitante,equipovisitante,fecha,hora,lugar) {
    console.log("crearproxpartido");
    var partido = document.createElement("div");
    partido.classList.add('partido')
    var currentDiv = document.getElementById(donde);
    currentDiv.appendChild(partido);
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
    
    var datos=document.createElement("div");
    datos.classList.add('equipo');
    escudos.appendChild(datos)

   

    var fechahora=document.createElement("p");
    fechahora.textContent=formatofecha(fecha)+"   ("+formatohora(hora)+")";
    datos.appendChild(fechahora);

    var ubicacion=document.createElement("p");
    ubicacion.textContent=lugar;
    datos.appendChild(ubicacion);

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
}
function formatofecha(input){
  var datePart = input.match(/\d+/g),
  year = datePart[0].substring(0,4), // get only two digits
  month = datePart[1], day = datePart[2];

  return day+'-'+month+'-'+year;
}
function formatohora(input){
  var datePart = input.match(/\d+/g),
  year = datePart[0].substring(0,4), // get only two digits
  month = datePart[1], day = datePart[2];

  return year+':'+month;
}