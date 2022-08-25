const yargs = require("yargs");

const argv = require("yargs")
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true, // esto es para que el parametro sea obligatorio
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10, 
        describe: 'Especifica hasta donde llega el multiplicador'
    })
    .check((argv, options)=>{
        if ( isNaN( argv.b ) ) {
            throw 'La base tiene que ser un numero!'
        }
        return true;
    })
    .check((argv, options) => {
        if ( isNaN( argv.hasta ) ) {
            throw 'El limite del multiplicador tiene que ser un numero!'
        }
        if ( argv.hasta < 1 ) {
            throw 'El parametro "--hasta" tiene que ser mayor o igual que 1!'
        }
        return true;
    })
    .argv;

module.exports = argv;