
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {

    case 'crear':
            console.log("crear por hacer")
        break;

    case 'listar':
        //listarTabla(argv.base, argv.limite);
        console.log("mostrar tareas por hacer")
        break;
        /*crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;*/

    case 'actualizar':
            console.log("actualiza una tarea por hacer")
        break;

    default:
        console.log('Comando no reconocido');

}