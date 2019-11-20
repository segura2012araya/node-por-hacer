const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./config/por-hacer/por-hacer')
let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.Crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=========Por Hacer============='.green);
            console.log(tarea.Descripcion);
            console.log('Estado : ', tarea.completado)
            console.log('==============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando no es reconocido');
        break;
}