// console.log('Hola Mundo')

// Tipos de Datos en JS
// String : cadena de carecteres

let miPrimeraVariable = 'Mi primera variable!'
// console.log(miPrimeraVariable)

// mutabilidad
miPrimeraVariable = 'Esto ha cambiado!'
// console.log(miPrimeraVariable)

//boolean
let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

// console.log(miBoolean, miOtroBool, miNumero, miNumero2, miNumero3)

let undef
// console.log(undef)

let nulo = null
// console.log('nulo', 12, nulo)

// Objeto vacio
const miPrimerObjeto = {}

// Objeto
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true,
}

// console.log(miObjeto.unNumero);

const arrVacio = []

const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

// console.log(arrVacio,arr)


arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)

// console.log(arrVacio)

// control de flujo

// let x = 1
// while (x <= 5) {
//     console.log(x);
//     x++
// }

// control de flujo - switch

// y = 3;

// switch (y) {
//     case 1 :{
//         console.log('Yo soy el caso 1');
//         break;
//     }
//     case 2: 
//         console.log('chanchito feliz');
//         break;
//     case 3:
//         console.log('chanchito triste');
//         break;
//     default:
//         console.log('No hay chanchitos');
//         break;

// }

// control de flujo : for

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// const numeros = [1, 2, 'hola', 4, 5]

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
// }

// function iterar(arg1) {   

//     for (let i = 0; i < arg1.length; i++) {
//         console.log(arg1[i])
//     }
// }

// const numeros = [1, 2, 'hola', 4, 5]
// const nombres = ['Pedro', 'Juan','Chanchito Feliz', 'Chanchito triste']
// iterar(numeros)
// iterar(nombres)


function sumar(a,b,cb) {
    const r = a + b
    cb(r)
}
function callbak(result) {
    console.log('resultado', result)
}

// sumar(2, 3, callbak)


// fat arrow functions
const miFatArrowFunction = (a, b) => a + b
const otraFAF = (a,b )=> {
    return a + b
}
const r = otraFAF(1, 2)
// console.log(r)

// Funciones anonimas -> funcion que no tiene ningun nombre

sumar(2, 3, function (r) {
    console.log('Soy una funcion anonima y mi resultado es: ', r)
})