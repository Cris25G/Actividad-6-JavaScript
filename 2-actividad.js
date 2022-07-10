'use strict' //Modo estricto de JavaScript

var num1;
var num2;
var suma;
var seguir_suma;

//Pide dos numeros al usuario y los suma
do {
    num1 = parseInt(prompt("Ingrese El Primer Numero A Sumar"));
    num2 = parseInt(prompt("Ingrese El Segundo Numero A Sumar"));
    suma = num1 + num2
    alert("El Resultado Es : " + suma);
    
 //Pregunta al usuario por si quiere continuar    
    seguir_suma = prompt("Si quiere seguir sumando ingrese 1, De lo contrario ingrese Otro Numero");
   
} while (seguir_suma == "1");

//Alerta final del bucle
alert("Gracias Por Utilizar El Programa")
