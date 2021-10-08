//Meter el modelo de platillos que contiene el arreglo
const Muestra = require('../models/muestra');

//Lo que estaba en la función en menu.js
//Mandar la lógica al controller
exports.getList = (request, response, next) => {
    /*//Imprimir las cookies en consola
    console.log(request.get('Cookie'));*/
    /*//split es para separar String según el caracter que se indique en sus ()
    console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);*/
    //Para poder ver una cookie específica usando cookieParser
    console.log(request.cookies.ultima_muestra);

    response.render('lista_muestras', {
        titulo: "Muestras",
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
        //Para poder recibir el arreglo de platillos
        lista_muestras: Muestra.fetchAll(),
    });
};

exports.getAdd = (request, response, next) => {
    response.render('add_muestras', {
        titulo: "Agregar Muestra a la lista",
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    });
};

exports.postAdd = (request, response, next) => {
    //En header va cookie             nombre_cookie     valor_cookie
    response.setHeader('Set-Cookie', 'ultima_muestra='+'Nombre: '+request.body.nombre+' Descripcion: '+request.body.funcion + ';HttpOnly');

    const muestra = new Muestra(request.body.nombre, request.body.funcion);
    muestra.save();
    response.status(302).redirect('/muestras/list');
};  


