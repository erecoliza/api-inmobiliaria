var express = require('express');
const { create } = require('underscore');
var router = express.Router();
const {listarProductos, agregarProducto, productoUnitario, editarProducto, borrarProducto,borrarTodo} = require('../controller/controllerProduct.js');

router.get('/list', listarProductos);
router.post('/add/product', agregarProducto);
router.get('/list/:id', productoUnitario);
router.put('/edit/:id', editarProducto);
router.delete('/delete/product/:id', borrarProducto);
router.delete('/delete/products/all', borrarTodo);

module.exports = router;

