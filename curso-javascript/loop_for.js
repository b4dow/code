


var empleados = ["Juanita", "Miguelito", "Pepito", "Juancito"];

function saludarEmpleados(empleado){
  console.log(`Hola ${empleado}`);
}

for ( var i = 0; i < empleados.length; i++ ){
  saludarEmpleados(empleados[i]);
}

for ( var empleado of empleados ){
  saludarEmpleados(empleado)
}
