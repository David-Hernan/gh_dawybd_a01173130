const cuentas = [
    "Correo de la víctima: ejemplo1@hotmail.com",
    "Correo de la víctima: ejemplo2@hotmail.com"
];
const contras = [
    " Contraseña: contra1",
    " Contraseña: contra2"
]; 


//Mandar la lógica al controller
exports.getList = (request, response, next) => {
    response.render('phishing', {
        lista_cuentas: cuentas,
        lista_contras: contras
    });
};

exports.getPhishing = (request, response, next) => {
    let respuesta = '<head><meta charset="UTF-8"></head>';
    respuesta += '<p>Página de phishing, no ingresar datos reales</p>';
    respuesta += '<h1>¡SU CUENTA HA SIDO HACKEADA!</h1>';
    respuesta += '<h2>Rápido, ingrese su usuario y contraseña para verificar que es usted y recuperar su cuenta.</h2>';
    respuesta += '<br/>';
    respuesta += '<br/>';
    respuesta += '<form action="/phishing" method="POST">';
    respuesta += '<label for="mail">Correo: </label>';
    respuesta += '<input type="text" id="mail" name="mail" placeholder="ejemplo@live.com" required>';
    respuesta += '<br/>';
    respuesta += '<br/>';
    respuesta += '<label for="psswrd">Contraseña: </label>';
    respuesta += '<input type="text" id="psswrd" name="psswrd" placeholder="contraseña">';
    respuesta += '<br/>';
    respuesta += '<br/>';
    respuesta += '<input type="submit" id="enviar" name="enviar" value="Enviar">';
    respuesta += '</form>';
    respuesta += '<br/>';
    respuesta += '<a href="/">Volver al menú</a>';
    respuesta += '<p>Este sitio almacena los datos ingresados en un archivo llamado Phishing.txt</p>';
    response.send(respuesta); 
};

exports.postPhishing = (request, response, next) => {
    let hacked = '<head><meta charset="UTF-8"></head>';
    hacked += '<h1>¡Ahora sí ha sido HACKEADO!</h1>';
    hacked += '<h2>lol</h2>';
    hacked += '<img src="https://cdn.pixabay.com/photo/2014/04/03/00/39/guy-fawkes-308973_960_720.png">';
    hacked += '<br/>';
    hacked += '<a href="/">Volver al menú</a>';
    cuentas.push(request.body.mail);
    contras.push(request.body.psswrd);
    response.send(hacked);
};