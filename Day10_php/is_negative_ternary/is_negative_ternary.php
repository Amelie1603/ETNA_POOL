<?php


function is_negative_ternary($nombre) {
 

$var = is_string($nombre) ? "le parametre n'est pas un Int\n" : ($nombre>=0 ? "False\n" : "True\n");
   echo $var;
}      




?>