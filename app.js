const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');


console.clear();

crearArchivo(argv.base, argv.hasta, argv.listar)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow , 'creado') )
    .catch( err => console.log(err) );


// esto es en lugar de yargs
// const [,, arg3 = 'base = 5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log( base );


