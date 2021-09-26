const express = require('express');

const router = express.Router(); 

router.get('', (request, response, next) => {
    response.render('labs')
});

router.get('/lab3', (request, response, next) => {
    response.render('index3')
});

router.get('/lab5', (request, response, next) => {
    response.render('index5')
});

router.get('/lab6', (request, response, next) => {
    response.render('index6')
});

router.get('/lab7', (request, response, next) => {
    response.render('index7')
});

router.get('/lab12', (request, response, next) => {
    response.render('index12')
});

module.exports = router;