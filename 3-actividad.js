'use strict' //Modo estricto de JavaScript

//Pide las notas de los alumnos al usuario
var nota_alumno = parseInt(prompt("Ingrese La Nota Del Alumno", "Nota En Numero"));

//Alerta según calificación de los alumnos
switch (nota_alumno) {
    case 1: alert("Muy Deficiente"); break;
    case 2: alert("Muy Deficiente"); break;
    case 3: alert("Muy Deficiente"); break;
    case 4: alert("Insuficiente"); break;
    case 5: alert("Insuficiente"); break;
    case 6: alert("Bien"); break;
    case 7: alert("Bien"); break;
    case 8: alert("Notable"); break;
    case 9: alert("Notable"); break;
    case 10: alert("Sobresaliente"); break;
    
    default: alert("Ingrese un valor correcto");
}

alert("Gracias Por Utilizar El Programa")