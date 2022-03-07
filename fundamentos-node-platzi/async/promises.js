function hola(nombre) {
  return new Promise(function (resolve, reject) { // Esto devuelve una promesa
    setTimeout(function () {
      console.log("hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve();
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      console.log("Bla bla bla...")
      resolve()
    })
  })
}

console.log("Iniciando el proceso...");
hola("Luis")
  .then(hablar)
  .then(hablar)
  .then(nombre => {
    return adios(nombre);
  })
  .then((nombre) => {  // sintaxis EM6 function
    console.log("terminado el proceso...");
  })
  .catch(error => {
  console.log("ha habido un error!!");
  console.error("error");
});
