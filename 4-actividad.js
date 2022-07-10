'use strict' //Modo estricto de JavaScript

var i;
var pir;

//Crear Piramide del 1 al 15 y imprimirlas en el documento 
for(i = 1; i <= 15; i++){
    for(pir = 0; pir < i; pir++){
        document.write(i);
    }
    
    document.write("<br>")
    
}