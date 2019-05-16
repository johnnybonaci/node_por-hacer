const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('actualizar', 'Genera un archivo con la tabla de multiplicar', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}