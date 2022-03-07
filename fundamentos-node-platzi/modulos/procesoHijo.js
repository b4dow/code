function limpiar() {
    console.clear();
}

const {exec, spawn } = require('child_process');


limpiar();

// exec('node consola.js', (err, stdout, sterr) => {
//     if(err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// });

let proceso = spawn('ls',['-la']);

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', function(dato) {
    console.log('Esta muerto')
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit',function () {
    console.log('El proceso termino', proceso.killed)
})