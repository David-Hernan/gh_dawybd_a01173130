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
    /*//split es para separar String según el caracter que se indique en sus ()
    console.log(request.get('Cookie'));*/
    /*console.log(request.get('Cookie').split(';')[0].trim().split('=')[1]);*/
    //Para poder ver una cookie específica usando cookieParser
    console.log(request.cookies.Ultimo_user);

    response.render('phishing', {
        lista_cuentas: cuentas,
        lista_contras: contras,
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username
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
    //En header va cookie             nombre_cookie     valor_cookie
    response.setHeader('Set-Cookie', 'Ultimo_user='+'User: '+request.body.mail+' Psswrd: '+request.body.psswrd + ';HttpOnly');
    
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