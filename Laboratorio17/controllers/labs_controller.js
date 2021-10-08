
//Lo que estaba en la función en menu.js
//Mandar la lógica al controller
exports.getLabs = (request, response, next) => {
    response.render('labs', {
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    }); 
};

exports.getLab3 = (request, response, next) => {
    response.render('index3', {
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    }); 
};

exports.getLab5 = (request, response, next) => {
    response.render('index5', {
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    }); 
};

exports.getLab6 = (request, response, next) => {
    response.render('index6', {
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    }); 
};

exports.getLab7 = (request, response, next) => {
    response.render('index7', {
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    }); 
};

exports.getLab12 = (request, response, next) => {
    response.render('index12', {
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    }); 
};