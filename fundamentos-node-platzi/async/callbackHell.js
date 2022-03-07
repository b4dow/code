function hola(nombre, micallback) {
  setTimeout(function () {
    console.log("hola " + nombre);
    micallback(nombre);
  }, 1500);
}

function adios(nombre, otrocallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    otrocallback();
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla....");
    callbackHablar();
  }, 1000);
}

function conversation(nombre, veces, callback) {
  if (veces >= 0) {
    hablar(function () {
      conversation(nombre, --veces, callback);
    });
  } else {
    adios(nombre,callback);
  }
}

// --
console.log("Iniciando procesoo...");
hola('carlos',function(nombre){
  conversation(nombre, 3, function(){
    console.log('Proceso Terminado!...')
  });
});
// hola("Luis", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       adios(nombre, function () {
//         console.log("Terminando procesoo..");
//       });
//     });
//   });
// });
