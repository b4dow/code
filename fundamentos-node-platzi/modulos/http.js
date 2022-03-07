function limpiar(){
    console.clear();
}

limpiar();
const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva peticion!!!');
    console.log(req.url);

    switch(req.url) {
        case '/hack':
            res.write('<h1>NSA hackeado con html purito!</h1>');
            res.end();
            break;

        default:
            res.write('Error 404: Url no encontrada!!')
            res.end();
            break
    }



    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // // Escribir respuesta al usuario
    // res.write('Ya se usar HTTP con NodeJS');
    // res.end();
}

console.log('Escuchando http en el puerto 3000')

// limpiar();
// const { createServer } = require('http');

// const port = 3000

// function router(req, res) {
//     switch(req.url) {
//         case '/':
//             res.write('<h1>Hola Mundo!!!');
//             res.end()
//             break
//         default:
//             res.write('Error 404: Url no existe!!');
//             res.end()
//             break
//     }
// }

// const server = createServer(router);

// server.listen(port, (err) => {
//     if(err) {
//         console.info('Could not establish a connection to the server');
//         console.error(err.message)
//     }
//     console.info(`> Ready On http://localhost:${port}`);
// })



