'use strict' //Modo estricto de JavaScript


var opcion
var prender_auto = 1
var apagar_auto = 2;
var poner_musica = 3;
var poner_modo_street = 4;
var poner_modo_speed = 5;
var prender_luces = 6;
var apagar_luces = 7;
var seleccion;


//Preguntas al usuario para que ingrese que acción quiere realizar

do {
   
    opcion = parseInt(prompt("Ingrese cualquiera de estas acciones que quiera realizar: 1-Prender el auto, 2-Apagar el auto, 3-Poner la musica, 4-Poner en modo Street, 5-Poner en modo Speed, 6-Prender la luces, 7-Apagar las luces", "Escribir aqui"));

    if (opcion == prender_auto) {
        alert("Usted Prendio El Auto")
    }
    else if (opcion == apagar_auto) {
        alert("Usted Apago El Auto")
    }
    else if (opcion == poner_musica) {
        alert("Usted Puso Musica")
    }
    else if (opcion == poner_modo_street) {
        alert ("Usted Eligio Poner El Auto En Modo Street")
        
    }
    else if (opcion == poner_modo_speed){
        alert("usted Eligio Poner El Auto En Modo Speed")
    }
    else if (opcion == prender_luces) {
        alert("Usted Eligio Prender Las Luces")
    }
    else if (opcion == apagar_luces) {
        alert("Usted Eligio Apagar Las Luces")
    }

    else {
        alert("Ingrese un valor correcto")
    }

   
    seleccion = prompt("Si quiere continuar con el programa ingrese 1, sino presione cualquier numero");
   
} while (seleccion == "1");

//Alerta final del bucle
alert("Gracias Por Utilizar El Programa")

