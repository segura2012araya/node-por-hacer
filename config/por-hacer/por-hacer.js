const fs = require('fs');

let listadoporHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoporHacer);
    fs.writeFile('config/por-hacer/db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}
const cargarDB = () => {
    try {

        listadoporHacer = require('../por-hacer/db/data.json');

    } catch (error) {
        console.log('Listado se encuentraba vacío');
        listadoporHacer = [];
    }

}
const Crear = (Descripcion) => {
    cargarDB();
    let porHacer = {
        Descripcion,
        completado: false
    };
    listadoporHacer.push(porHacer);
    guardarDB();
    return porHacer;

};
const getListado = () => {
    cargarDB();
    return listadoporHacer;
}
const actualizar = (Descripcion, completado = true) => {
    cargarDB();
    let index = listadoporHacer.findIndex(tarea => tarea.Descripcion === Descripcion);
    if (index >= 0) {
        listadoporHacer[index].completado = completado;
        guardarDB();
        return true;
    } else { return false; }
}
const borrar = (Descripcion) => {
    cargarDB();
    let nuevoArreglo = listadoporHacer.filter(tarea => tarea.Descripcion !== Descripcion);
    if (nuevoArreglo.length === listadoporHacer.length) {
        return false;
    } else {
        listadoporHacer = nuevoArreglo;
        guardarDB();
        return true;
    }

}

module.exports = {
    Crear,
    getListado,
    actualizar,
    borrar
}