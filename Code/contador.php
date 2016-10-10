<?php
// Archivo donde almacenamos el contador
$contador = 'counter.txt';

if( file_exists( $contador ) ){
 
 // Obtenemos el último valor registrado.
 $file = file_get_contents( $contador );
 
 // Sumamos uno a la última visita.
 $visita = $file+1;
 
 // Escribimos el nuevo valor.
 file_put_contents($contador, $visita);
 
 // Imprimimos el número de visitante.
 echo number_format($visita);
 
}//.if
?>