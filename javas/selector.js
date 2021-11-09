  const header = document.querySelector('header');
    const section = document.querySelector('section');
    const requestURL = 'https://pekemir.github.io/new1.json';
    const request = new XMLHttpRequest();
    var seleccion1;
    var seleccion2;
    var seleccion3;
    var titulos;
    var categorias1=document.getElementById("categorias");
    var categorias2=document.getElementById("categorias2");
    var categorias3=document.getElementById("categorias3");
    var categorias4=document.getElementById("categorias4");
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    const superNoticias = request.response;
    basejsoncompeticiones=superNoticias['competiciones'];
   titulocategorias();}
   
    

      function titulocategorias(){
      var i;
      
      for (i = 0; i < basejsoncompeticiones.length; i++) {
      var car = new Option(basejsoncompeticiones[i].titulo, i);
      categorias1.options.add(car);
      console.log(basejsoncompeticiones[i].titulo);
    }


   };
   function borrarselecciones1(){
     var i =0;
     var largo=categorias2.options.length+1;
     
     for (i = 0; i < largo; i++) {
      categorias2.options.remove(0);
   
      }
      console.log();
      
     
     
      var car = new Option("ELIGE", 100);
      categorias2.options.add(car);
     borrarselecciones2();
     borrarselecciones3();
     var sel = document.getElementById("principal");
     
     sel.style.display='none';

    }
    function borrarselecciones2(){
      var i =0;
      var largo=categorias3.options.length+1;
           for (i = 0; i < largo; i++) {
       categorias3.options.remove(0);
              }
       
   }
   function borrarselecciones3(){
    var i =0;
    var largo=categorias4.options.length+1;
         for (i = 0; i < largo; i++) {
     categorias4.options.remove(0);
            }
     
 }
   function segundacategoria(){

    console.log("segundacategoria");
    
     borrarselecciones1();
   seleccion1 = categorias1.options[categorias1.selectedIndex].value;
   console.log(seleccion1);
   var i=0;
   for (i = 0; i < basejsoncompeticiones[seleccion1].categorias.length; i++) {
      var car = new Option(basejsoncompeticiones[seleccion1].categorias[i].titulo, i);
     categorias2.options.add(car);
      
      }
      
   }
   function terceracategoria(){
    borrarselecciones2();
    var car = new Option("ELIGE", 100);
      categorias3.options.add(car);
    console.log("terceraacategoria");
    seleccion2 = categorias2.options[categorias2.selectedIndex].value;
    console.log(basejsoncompeticiones[seleccion1].categorias[seleccion2].competiciones.length);
     var i=0;
    
     for (i = 0; i < basejsoncompeticiones[seleccion1].categorias[seleccion2].competiciones.length; i++) {
       var car = new Option(basejsoncompeticiones[seleccion1].categorias[seleccion2].competiciones[i].titulo, i);
       console.log(i);
      
       categorias3.options.add(car);
       
       }
       
    }
    function cuartacategoria(){
      borrarselecciones3();
      var car = new Option("ELIGE", 100);
        categorias4.options.add(car);
      console.log("terceraacategoria");
      seleccion3 = categorias3.options[categorias3.selectedIndex].value;
      console.log(basejsoncompeticiones[seleccion1].categorias[seleccion2].competiciones[seleccion3]);
      console.log(basejsoncompeticiones[seleccion1].categorias[seleccion2].competiciones[seleccion3].opciones.length);
       var i=0;
      
       for (i = 0; i < basejsoncompeticiones[seleccion1].categorias[seleccion2].competiciones[seleccion3].opciones.length; i++) {
         var car = new Option(basejsoncompeticiones[seleccion1].categorias[seleccion2].competiciones[seleccion3].opciones[i], i);
         
         categorias4.options.add(car);
         
         }
        
         
      }

    

   