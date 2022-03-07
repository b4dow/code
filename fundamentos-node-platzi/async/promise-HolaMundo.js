// const p1 = Promise.resolve(1)

// console.log(p1);

// p1
//   // .then(x => console.log(x))
//   .then(x => x + 5)
//   .then(x => Promise.resolve(x + 5))
//   .then(x => Promise.reject('Erroor! algo sucedio mal'))
//   .then(x => console.log('Esto no se va a llamar'))
//   .catch(e => console.log(e))

// Promesas que se empiezan a resolver en el futuro
// Creamos una funcion que se llama timer, que recibe un argumento de x esa funcion retorna una instancia de una nueva promesa esa clase de promise recibe una funcion el cual se 
// le van a pasar el argumento de resolve y reject ambos son funciones
// SetTimeout en el fondo es para ppoder retrasar la funcion o la resolucion de la promesa  y llama el resolve y le pasa el valor de x y despues el timer se debe retrasar 500
const delay = x => new Promise((resolve,reject) => setTimeout(() => resolve(x),900))

// Ejecuta el delay con el 7

delay(7)
  .then(x => {
    console.log(x)
    return delay(x + 7)
  })
  .then(x => console.log(x))
  .then(x => Promise.reject('Hubo un error :('))
  .catch(e => console.log(e))
