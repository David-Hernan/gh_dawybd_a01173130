

exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: "Iniciar sesión",
        isLoggedIn: request.session.isLoggedIn ||false,
        username: request.session.username,
    });
};

exports.postLogin = (request, response, next) => {
    //Acá va la variable de sesión (para cuando ingrese el user)
    //              nombre_variable
    request.session.username = request.body.username;
    request.session.isLoggedIn = true;
    console.log(request.session.username);
    response.status(302).redirect('/');
};

exports.getLogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/login')
    });
};




