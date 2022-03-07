

var frutas = [ "Manzana", "Platano", "Cereza", "Arandanos", "Fresa" ];

// Agrega un dato al final del array
var masFrutas = frutas.push("Uvas");
console.log(frutas)

// Elimina el ultimo dato del array
var ultimo = frutas.pop();
console.log(frutas)


// Agrega el dato en la posicion 0
var nuevaLong = frutas.unshift("Uvas");
console.log(frutas);

// Elimina lo que esta en la posicion 0
var borrarfruta = frutas.shift("Uvas");
console.log(frutas);

// Nos mostrara la longitud del array o cuantos datos tiene.
console.log(frutas.length);

//Busca la posicion del indice del dato en el array
var posicion = frutas.indexOf("Cereza");
console.log(posicion)

// Ordenar alfabeticamente
var order = frutas.sort();
console.log("ORDENAR LA LISTA: " + order)
