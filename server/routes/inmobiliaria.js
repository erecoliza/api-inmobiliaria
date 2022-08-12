var express = require('express');
const { create } = require('underscore');
var router = express.Router();
const {listarPropiedades, agregarPropiedad, propiedadUnica, editarPropiedad, borrarPropiedad} = require('../controller/controllerInmobiliaria.js');

router.get('/listar/propiedades', listarPropiedades);
router.post('/agregar/propiedad', agregarPropiedad);
router.get('/listar/propiedad/:id', propiedadUnica);
router.delete('/borrar/propiedad/:id', borrarPropiedad); 
router.put('/editar/propiedad/:id', editarPropiedad);

module.exports = router;

