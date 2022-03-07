const fs = require('fs').promises;


const read = async (path) => {
    try {
        const file = await fs.readFile(path);
        console.log(file.toString());
    } catch(error){
        console.error(error)
    }
}

async function write(path, contenido) {
    try {
        await fs.writeFile(path, contenido);
    } catch(error) {
        console.error(error);
    }
};

const remov = async (path) => {
    try {
        await fs.unlink(path);
        console.log('Eliminado Exitosamente...')
    } catch (error) {
        console.error(error)
    }
} 

let writeDelete = async (path,cbwrite) => {
    console.log('------- ReadWriteDelete ---------');
    await write(path,'Soy un archivo nuevo',cbwrite);
    await read(path);
    await remov(path);
}

// read('./archivo.txt');

writeDelete('./archivo2.txt' , () => {
    console.log('Se ha terminado de escribir el archivo, ejemplo de promises');
})


