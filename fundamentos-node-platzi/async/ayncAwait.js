function hola(nombre) {
  // async es para declarar una funcion asincrona
  return new Promise(function (resolve, reject) {
    // Esto devuelve una promesa
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
    setTimeout(function () {
      console.log("Bla bla bla...");
      resolve();
    });
  });
}

async function main() {
  let nombre = await hola("Luis");
  await hablar();
  await adios(nombre);
  console.log("Terminamos el proceso...");
}

console.log("Empezamos el proceso...");
main();
