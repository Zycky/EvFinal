const utils = require('../resources/utils')
const moment = require('moment')

const getIndex = (request,response) =>{
    response.render('index');
}

/*Controlador Documentos*/
const getDocu = (request,response) =>{
    response.render('post');
}

function setDocu(request, response) {
    posts.push({
        nombre: request.body.nombre,
        fecha: moment().format('D-M-Y hh:mm'),
        id: request.body.id,
        tipodoc: request.body.tipo,
        linkdoc: request.body.linkdoc
    });

    response.render('Documentos');
}

module.exports = {
    getIndex,
    getDocu,
    setDocu
}