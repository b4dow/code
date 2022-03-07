

function primeraFuncion(array){
    console.log(array[0]);
}

let frutas = ["Manzana", "Platano" , "Pera"]

const unaFuncion = (array) => {
  array.forEach((elem) => {
    console.log(elem);
  });
}

// unaFuncion(frutas);


let estudiante = {
  nombre : 'Luis',
  apellido : 'canari',
  edad : 23,
  trabajando : true
}

const datosEstudiante = (objeto) => {
  for(let prop in objeto) {
    console.log(`La propiedad ${prop} tiene como valor ${objeto[prop]}`)
  }
}

datosEstudiante(estudiante)
