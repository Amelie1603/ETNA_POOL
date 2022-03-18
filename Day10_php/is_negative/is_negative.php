<?php




function is_negative($nombre) {
 
if (is_string($nombre)){
    echo "Le parametre n'est pas un Int\n";
    }
    elseif ($nombre >= 0){
        echo "False\n";
        } elseif ($nombre < 0) {
            echo "True\n";
            }
           

   
       
}

   

?>