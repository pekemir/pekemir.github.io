<meta charset="utf-8"/>
 <?php
// Rescatamos el parámetro que nos llega mediante la url que invoca xmlhttp
$pais=$_POST["pais"];
$resultadoConsulta = '';
$msg = 'El pais recibido en segundo plano ahora es '.$pais;
if ($pais) {
    $link = mysqli_connect("aquiNombreServidor", "aquiUsuario", "aquiPassword");
    mysqli_select_db($link, "prueba1");
    $tildes = $link->query("SET NAMES 'utf8'"); //Para que se muestren las tildes correctamente
    $result = mysqli_query($link, "SELECT a.ciudadImportante
                FROM ciudades_importantes AS a, paises AS b
                WHERE a.idPais = b.id
                AND nombrePais = '".$pais."'");

while ($fila = mysqli_fetch_array($result)){
$resultadoConsulta .= ','.$fila['ciudadImportante'];
}

//Devolvemmos la cadena de respuesta
echo $msg.$resultadoConsulta;

mysqli_free_result($result);
mysqli_close($link);
} else {
    echo 'No se han recibido datos';
}
?>