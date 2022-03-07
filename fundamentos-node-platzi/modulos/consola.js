// console.log('lo que sea')
// console.info('La consola de informacion')
// console.error('la consola de error')
// console.warn('warn')

var table = [
    {
            a: 1,
            b: 'z'
    },
    {
        a: 2,
        b:'Otra'
    }
]

// Te crea una tabla de los array o objetos
// console.table(table);

// console.log('HOLA');


// function funcion1() {
//     console.group('funcion 1...')
//     console.log('Esto es la funcion 1')
//     console.log('esto tambien')
//     funcion2()
//     console.log('hemos vuelto a la funcion 1')
//     console.groupEnd()
// }

// function funcion2(){
//     console.group('Funcion 2')
//     console.log('AHora estamos en la funcion 2')
//     console.groupEnd()
//     //
// }

// console.log('Empezamos...')
// funcion1()

// console.count('veces')
// console.count('veces')
// console.count('veces')
// console.count('veces')
// console.count('veces')

// console.error(new Error('Asi tambien se declara un error'))

function limpiar() {
    console.clear('Limpiando consola')
}

// limpiarConsola();

console.time('100-elementos');
for(let i = 0; i < 100; i++) {
}
console.timeEnd('100-elementos');


limpiar();
console.log('Mostrando mensaje');