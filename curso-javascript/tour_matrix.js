
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo : 2500 },
  { nombre : "Libro", costo: 320 },
  { nombre : "Celular", costo : 10000 },
  { nombre : "Laptop", costo : 20000 },
  { nombre : "Teclado", costo : 500 },
  { nombre : "Audifonos", costo : 1700 },
]

// Se usa para hacer un filtrado de datos 
var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo < 500
});

// console.log(articulosFiltrados);

var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre
});

// Encuentra la propiedad que le des
var encuentraArticulos = articulos.find(function(articulo) {
  return articulo.nombre === "Laptop"
});
encuentraArticulos();


// Listar los productos del array
articulos.forEach(function(articulo){
  // console.log(articulo.costo)
});
  
// Validacion de verdadero o falso

var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
})


// console.log(articulosBaratos)
