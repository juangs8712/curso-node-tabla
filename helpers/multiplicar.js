const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 1, hasta = 10, listar = false )=>{    
    try {
        let fichero = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {
            consola += (`${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`);    
            fichero += (`${base} x ${index} = ${base * index}\n`);    
        }

        if ( listar ) {
            console.log('==============================='.green);
            console.log('Tabla del '.green, colors.blue( base ) );
            console.log('==============================='.green);            
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, fichero);        
    } catch (error) {
        return error;
    }
    
    return `tabla-${base}.txt`;
    
    // otra forma de escribir en ficheros
    // fs.writeFile('tabla-5.txt', fichero, (err) =>{
    //     if ( err )  throw err;
    //     console.log('tabla-5.txt creado');
    // });
}

module.exports = {
    crearArchivo
}
