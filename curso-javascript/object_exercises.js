
var autos = [];


function Auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var cantidadAutos = prompt("Solicitar la cantidad de autos: ");

for (cantRegistrados = 0; cantRegistrados < cantidadAutos; cantRegistrados++){
  var marca = prompt("Ingrese la marca: ");
  var modelo = prompt("Ingrese el modelo: ");
  var annio = prompt("Ingrese el annio: ");

  var autosNuevos = new autos(marca, modelo, annio);

  autos.unshift(autosNuevos);
}

console.log(autos);
