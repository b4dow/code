function soyAsincrono(callback) {
  console.log("Hola soy una funcion asincrona");
  callback();
}

console.log("Iniciando proceso.. ");
soyAsincrono(function(){
  console.log("Terminando proceso...");
});
