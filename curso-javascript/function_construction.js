

function auto(marca, modelo, annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

// Es una instancia del objeto
var autoNuevo = new auto("Tesla", "Model 3", 2020);

console.log(autoNuevo)

var autoNuevo2 = new auto("Testa", " Model X", 2018);

var autoNuevo3 = new auto("Toyota", "Corolla", 2019);

console.log(autoNuevo3)
