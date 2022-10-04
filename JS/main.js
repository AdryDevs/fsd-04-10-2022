// Operador Ternario
// después del ? guarda en la variable si es "true" y después de los : si es false.

// let edad = 16;

// let resultado = edad <= 16 ? "No puedes conducir en USA" : "Sí puedes";


// Loops

// let dinero = 50;

// while (dinero >= 0) {
//     if(dinero == 0){
//         console.log ("No tienes dinero")
//     } else{
//         console.log("Estoy comprando y me quedan", dinero,"€")
//     } dinero--;
// };

//Propuesta de Ejercicio - Crea una variable con un número del 1 al 9, despues sírvete de un bucle while para generar su tabla de multiplicar por console.log

// let i = 1;

// let tabla = parseInt(prompt("Quiero la tabla del..."));

// while (i <= 10){
//     console.log (tabla, "x", i, " es ", i * tabla);
//     i++
// };

// Do While se trata de un buble de un funcionamiento igual al while pero la primera vez SIEMPRE entra en el buecle.

// let numero = 36;

// do{

//     console.log("David es un genio")
// }while(numero < 36)

// Bucle FOR

// for(let i = 1; i <= 20; i++) {
//     console.log (i)
// }

// let tabla = 3;

// for (let i = 1; i <= 10; i++) {
//     console.log(tabla * i)
// }

// FUNCIONES

// function Sumar (num1, num2) {
    
//     let resultado = num1 + num2;

//     return resultado;
// };

// let resultadoSumar = Sumar (3, 4);

// console.log (resultadoSumar);

//         // o lo mismo sería

// function Sumar(num1,num2){
//     return console.log(num1 + num2);
// }

// Sumar(3,4)

    //Función anónima (no tiene nombre, directamente pasa los argumentos) la función se invoca cuando sacas la variable

// let contenedor = function (num1,num2){ return (num1 - num2)};

// console.log(contenedor)


// Ejercicio: hacer una función que divida y muestre en consola la división

// function Dividir (num1, num2) {
//     let resultado = num1 / num2;
//     return resultado;
// };

// console.log(Dividir(4, 2));

// let resultado = function() {
//     let num1 = parseInt(prompt("Introduce la base"));
//     let num2 = parseInt(prompt("Introduce el exponente"));

//     return console.log(num1 ** num2)
// };

// resultado();


// ARRAY

// let manelHobbie1 = "tocar el bajo";
// let manelHobbie2 = "Leer";
// let manelHobbie3 = "Cine";
// let manelHobbie4 = "Programación";

// let manelArrayHobbies = ["Tocar el bajo", "Leer", "Cine", "Programación"];

// console.log(manelArrayHobbies[0]);




// let numeros = [];

// for (let i = 1; i <= 100 ; i++) {
//     numeros.push(i);
// };

// console.log(numeros);



// let alumnosAmigos = ["Alex Lopez", "Joan", "Marta", "Elvis", "Julio", "Jesus"];

// for (let i = 0; i < alumnosAmigos.length; i++){
//     console.log("Hola ", alumnosAmigos[i]);
// }



// let saludarCompaneros = ["Fernando", "Jesus", "Hector", "Joan", "Alex"];

// for (let i = 0; i < saludarCompaneros.length; i++){
//     console.log("Saludos ",saludarCompaneros[i]);
// }




