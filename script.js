// const celsius = Number (prompt ("Ingrese la temperatura"));

// let resultadotemperaturaKelvin = celsius + 273.15;
// let resultadotemperaturaFarenheit= (celsius*1.8)+32;

// document.write (`La temperatura Kalvin es ${resultadotemperaturaKelvin}<br>`);
// document.write (`La temperatura Fahrenheit es ${resultadotemperaturaFarenheit}<br>`);

// alert ("Calculadora de temperatura");
// let celsius = +prompt(`Ingresa la temperatura en grados Celsius`);

// let kelvin = (celsius + 273.15); //se calcula los grados en kelvin
// let fahrenheit = (celsius * 9 / 5); + 32 //se calcula los grados en fahrenheit

// //se muestran la equivalencia en distintas unidades de medición de temperatura
// document.write(`${celsius}°C, equivale a ${kelvin}°K, y ${fahrenheit}°F`);  

// Solicitar al usuario que ingrese la cantidad de días
// let dias = parseInt(prompt("Ingrese la cantidad de días:"));

// // Calcular años, semanas y días
// let años = Math.floor(dias / 365);
// let diasRestantes = dias % 365;
// let semanas = Math.floor(diasRestantes / 7);
// let diasFinales = diasRestantes % 7;

// // Mostrar el resultado
// document.write (`${dias} días son equivalentes a ${años} año(s), ${semanas} semana(s) y ${diasFinales} día(s).`);


const num1 = Number (prompt ("Ingrese numero 1")); //pide datos a los usuarioqu
const num2 = Number (prompt ("Ingrese numero 2"));
const num3 = Number (prompt ("Ingrese numero 3")); //pide datos a los usuarioqu
const num4 = Number (prompt ("Ingrese numero 4"));
const num5 = Number (prompt ("Ingrese numero 5"));

// Calcular el promedio de los 5 números
let resultadoSuma = num1 + num2 + num3 + num4 + num5
let promedio = resultadoSuma /5;

// Mostrar los resultados
document.write(`La suma de los números es: ${resultadoSuma}`);
document.write(`El promedio de los números es: ${promedio}`);