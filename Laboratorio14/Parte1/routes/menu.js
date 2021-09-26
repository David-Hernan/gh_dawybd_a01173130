const express = require('express');

const router = express.Router(); 

router.get('', (request, response, next) => {
    let menu = '<head><meta charset="UTF-8"></head>';
    menu += '<!DOCTYPE html><html><head><h2>David Hernán García Fernández - A01173130</h2><h3>Información de contacto: a01173130@itesm.mx</h3><p>Soy estudiante de ISDR. Tengo experiencia programando en C, Java, Python, VHDL y Verilog; así como en la implementación de algoritmos de Machine Learning y visión artificial. Las actividades que me gusta realizar son: correr, bailar, leer, viajar, y aprender cosas nuevas. Me encanta la robótica.</p></head><body>';
    menu += '<header><h3><strong>Bienvenido al Laboratorio 14 parte 1:</strong></h3></header><header><h4><strong>Menú</strong></h4></header><li><a href="/phishing">Sitio simple de phishing</a></li><li><a href="/labs">Laboratorios 3, 5, 6, 7 y 12</a></li>';
    menu += '</body><br><br><br><footer><header>Editor HTML: <a href="https://code.visualstudio.com/">Visual Studio Code </a></header><p>Nota: En estos laboratorios le he dado más prioridad a la funcionalidad que a la estética</p></footer></html>';
    response.send(menu); 
});

module.exports = router;