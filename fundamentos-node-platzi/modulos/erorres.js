function limpiar(){
    console.clear();
}

function otraFuncion() {
    return serompe();
}

function serompe() {
    return 3 + z;
}

function serompeAsincrona(cb) {
   setTimeout (() => {
       try{
           return 3 + z;
       } catch(err) {
           console.log('Error en mi funcion asincrona')
           cb(err)
       }
   })
}

limpiar();

serompeAsincrona((err) => {
    console.log(err.message);
})