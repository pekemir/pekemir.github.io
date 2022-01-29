<?php
    $servername = "localhost";
    $database = "tablasalduie";
    $username = "root";
    $password = "";


    $respuesta=$_POST["competicion"];
 //$respuesta=$_POST["nombre"];
   $db = new mysqli($servername, $username, $password, $database);

//Verifiando el estado de la conexion
if(mysqli_connect_errno()) {
    exit("Error al conectar con la BD.");
}
$tabla_clasificacion="";
$tabla_partidos="";
$division="";

//Seleccionamos el set de caracteres
mysqli_set_charset($db, "utf8");
switch ($respuesta) {
    case '1':
        $tabla_clasificacion="clasificacion_primera";
        $divisionn="1ª División Masculina Hockey Hierba";
        break;
    
    default:
        # code...
        break;
}
$tabla_clasificacion="clasificacion_primera";
$tabla_partidos='1';
$clasificacion=array();
$division= array("division"=>$divisionn);
$clasificacion['nombreliga'][] = $divisionn;
//consultanoticias
$pr = $db->prepare("SELECT escudoesquipo,nombreequipo, partidosj, partidosg,partidose,partidosp,golesf,golesc,difgoles,puntos
FROM $tabla_clasificacion  ORDER BY puntos DESC");
//Indicamos los valores pasados por referencia

//Ejecutamos la consulta
if($pr->execute()){
 $pr->store_result();
 $pr->bind_result($escudoesquipo,$nombreequipo, $partidosj, $partidosg,$partidose,$partidosp,$golesf,$golesc,$difgoles,$puntos);

 while($pr->fetch()){
  
  $equipo = array(
    "escudoesquipo"=>$escudoesquipo,
    "nombreequipo"=>$nombreequipo, 
    "partidosj"=>$partidosj,
    "partidosg"=>$partidosg,
    "partidose"=>$partidose,
    "partidosp"=>$partidosp,
     "golesf"=>$golesf,
     "golesc"=>$golesc,
     "difgoles"=>$difgoles,
     "puntos"=>$puntos);
  $clasificacion['clasificacion'][] = $equipo;
  
 }}
 else {
	exit('Error al realizar la consulta: '.$pr->close());
}
$pr2 = $db->prepare("SELECT jornada,dia,eqlocal,esclocal,eqvis,esvis,lugar,golocal,golvis
FROM temporada2122 WHERE controldivision=$tabla_partidos AND jugado='1' ORDER BY jornada DESC" );
//("SELECT dia,hora,eqlocal,esclocal,eqvis,esvis,lugar,gollocal,golvis FROM temporada2122 WHERE campeonato=$tabla_partidos");

//Indicamos los valores pasados por referencia

//Ejecutamos la consulta
if($pr2->execute()){
 $pr2->store_result();
 $pr2->bind_result($jornada,$dia,$eqlocal,$esclocal,$eqvis,$esvis,$lugar,$gollocal,$golvis);
 

 while($pr2->fetch()){
  
    $partido = array(
        "jornada"=>$jornada,
        "dia"=>$dia,
        "eqlocal"=>$eqlocal,
        "eslocal"=>$esclocal,
        "eqvis"=>$eqvis,
        "esvis"=>$esvis,
        "lugar"=>$lugar,
        "gollocal"=>$gollocal,
        "golvis"=>$golvis);
      $clasificacion['partidos'][] = $partido;
      

  
 }
}else {
	exit('Error al realizar la consulta: '.$pr2->close());
}
$pr3 = $db->prepare("SELECT jornada,dia,hora,eqlocal,esclocal,eqvis,esvis,lugar
FROM temporada2122 WHERE controldivision=$tabla_partidos AND jugado='0' ORDER BY jornada ASC" );
//("SELECT dia,hora,eqlocal,esclocal,eqvis,esvis,lugar,gollocal,golvis FROM temporada2122 WHERE campeonato=$tabla_partidos");

//Indicamos los valores pasados por referencia

//Ejecutamos la consulta
if($pr3->execute()){
 $pr3->store_result();
 $pr3->bind_result($jornada,$dia,$hora,$eqlocal,$esclocal,$eqvis,$esvis,$lugar);
 

 while($pr3->fetch()){
  
    $partido = array(
        "jornada"=>$jornada,
        "dia"=>$dia,
        "hora"=>$hora,
        "eqlocal"=>$eqlocal,
        "eslocal"=>$esclocal,
        "eqvis"=>$eqvis,
        "esvis"=>$esvis,
        "lugar"=>$lugar);
        
      $clasificacion['proxpartidos'][] = $partido;
      

  
 }
}else {
	exit('Error al realizar la consulta: '.$pr3->close());
}

 echo json_encode($clasificacion);

	
	//Cerramos la conexion
	$pr->close();
  
	



?>