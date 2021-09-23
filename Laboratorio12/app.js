const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const phishing = require('./routes/phishing');
const bonita = require('./routes/bonita');

app.use(bodyParser.urlencoded({extended: false}));

//Ruta de phishing
app.use('/phishing', phishing)

//Ruta de página bonita
app.use('/bonita', bonita)

//request y response son objetos
app.use((request, response, next) => {
    console.log('Primer Middleware!');
    console.log(request.body);
    next(); 
});

app.use('/ruta/apelliodos', (request, response, next) => {
    console.log('Tercer Middleware!');
    response.send('Respuesta de la ruta "/ruta/apelliodos"'); 
});

//Agregar una ruta
app.use('/ruta', (request, response, next) => {
    console.log('Segundo Middleware!');
    response.send('Respuesta de la ruta "/ruta"'); 
});

//Página no encontrada
app.use((request, response, next) => {
    response.status(404); 
    let noen = '<head><meta charset="UTF-8"></head>';
    noen += '<h1>Esta página no existe...</h1>';
    noen += '<img src="https://i1.wp.com/media.giphy.com/media/8L0Pky6C83SzkzU55a/source.gif?w=525&ssl=1">';
    response.send(noen);
});

app.listen(3000);