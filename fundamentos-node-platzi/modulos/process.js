// const process = require('process');

process.on('beforeExit', () => {
    console.log('Ale, el proceso va a terminar...')
})

process.on('exit', () => {
    console.log("Ale, el proceso acabo")
})

process.on('uncaughtException', (err, origen) => {
    console.log('vaya se nos ha olvidado capturar un error');
    console.error(err)
})

functionQueNoExiste();

// process.on('uncaughtRejection')
