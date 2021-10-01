const express = require('express');
const app = express(); 

const bodyParser = require('body-parser');
const phishing = require('./routes/phishing');
const labs = require('./routes/labs');
const menu = require('./routes/menu');
const muestras = require('./routes/muestras');

//Devolver como respuesta un HTML, es un módulo
const path = require('path');

//Middleware
app.set('view engine', 'ejs');
app.set('views', 'views');

//Configura como carpeta estática la carpeta llamada "public"
//Para incluir los css y javascripts
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

//Ruta de phishing
app.use('/phishing', phishing)

//Ruta de página de labs (Lab7 y preguntas del 12)
app.use('/labs', labs)

//Ruta de página muestra (Lab15)
app.use('/muestras', muestras)

//Página de inicio (Menú principal)
app.use('', menu)

//Página no encontrada
app.use((request, response, next) => {
    response.status(404); 
    let noen = '<head><meta charset="UTF-8"></head>';
    noen += '<h1>Esta página no existe...</h1>';
    noen += '<img src="https://i1.wp.com/media.giphy.com/media/8L0Pky6C83SzkzU55a/source.gif?w=525&ssl=1">';
    response.send(noen);
});

app.listen(3000);