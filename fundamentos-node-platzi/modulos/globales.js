let i = 0; // Inicializo el contador en 0
let intervalo = setInterval(function () { // Asigno el setInterval a una variable intervalo para poder operarla luego
  console.log('Despegue') // Imprime mi nombre
  if( i === 10 ) { 
    clearInterval(intervalo)
  }
  i++;
},1000)

setImmediate(function () {
  console.log('Immediate')
})


console.log('Console 1')
console.log('Console 2')
console.log('Console 3')
console.log('Console 4')
console.log('Console 5')

// console.log(__filename)

global.miVariable = 'elValor';

// console .log(miVariable)


