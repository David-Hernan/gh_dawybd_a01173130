//Meter el modelo de platillos que contiene el arreglo
const Muestra = require('../models/muestra');

//Lo que estaba en la función en menu.js
//Mandar la lógica al controller
exports.getList = (request, response, next) => {
    response.render('lista_muestras', {
        titulo: "Muestras",
        //Para poder recibir el arreglo de platillos
        lista_muestras: Muestra.fetchAll(),
    });
};

exports.getAdd = (request, response, next) => {
    response.render('add_muestras', {
        titulo: "Agregar Muestra a la lista",
    });
};

exports.postAdd = (request, response, next) => {
    const muestra = new Muestra(request.body.nombre, request.body.funcion);
    muestra.save();
    response.status(302).redirect('/muestras/list');
};   