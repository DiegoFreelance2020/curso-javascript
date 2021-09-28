// Comentario de una sola linea
/*
Este es un coemntario
multilinea
*/
// alert("Funciona")

/*
=============VARIABLES================
*/

//Tipo String
var mivariablestring = "SOY EL RESULTADO";
let mivariablelet = "SOY 'VARIABLE' TIPO LET";
const nombre = "Alberto";
const apellido = "Gomez";

// Concatenar strings
let nombrecompleto = nombre + " " + apellido;
let nombrecompleto2 = `${nombre} ${apellido}`

//Tipo entero
var numeroCamiseta = 1920

//Tipo Decimal
var tallaZapatos = 38.5

let numeroTotal = numeroCamiseta + tallaZapatos;


//Tipo boolean
var estadoLuz = true
var estadoEstufa = false

//Tipo Array
var frutas = ["manzana", "banana", "pera", 24, true]
var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

//Tipo Objeto o tupla
var persona = {
    nombre: "Juan",
    apellido: "Gomez",
    edad: 24,
    soltero: true
}

//Imprimir en el DOM
//document.getElementById("nombre").innerHTML = persona.nombre

/*
=============FUNCIONES================
*/

function suma(numero1, numero2){
    var resultado = numero1 + numero2

    return resultado
}

function mostrarNombre(){
    return persona.apellido + persona.edad
}

var miSuma = suma(4, 20)

console.log(mostrarNombre())

function resta(numero1, numero2){
    var resultado = numero1 - numero2

    return resultado
}

var miResta = resta(5, 14)

console.log(miResta)

//Funcion tipo flecha
const nuevaSuma = (a, b) => (a + b)

console.log(nuevaSuma(5, 90))

/*
=============CICLOS================
*/

//Ciclo for
let dayNumberList = []
let dayNumberInit = 0

for (let index = 0; index < diasSemana.length; index++) {
    const dayName = diasSemana[index];
    let dayNumber = dayNumberInit + 1

    dayNumberList.push(dayNumber)
}

console.log(dayNumberList)