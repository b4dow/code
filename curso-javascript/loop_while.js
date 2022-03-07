

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludaEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

while (estudiantes.length > 0) {
  // console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludaEstudiantes(estudiante);
}
