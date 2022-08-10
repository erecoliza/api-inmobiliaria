var express = require('express');
const { create } = require('underscore');
var router = express.Router();
const {listarProductos, agregarProducto} = require('../controller/controllerProduct.js');

/*
CRUD (-CREATE-READ-UPDATE-DELETE)

Metodos:
POST = CREATE
GET = READ
PUT = UPDATE
DELETE = DELETE
*/

router.get('/list', listarProductos);
router.post('/add/product', agregarProducto);
/*
router.get('/list/:id', productoUnitario);
router.put('/edit/:id', editarProducto);
router.post('/add/product',agregarProducto);
router.detele('/detele/product/:id', borrarProducto);
router.delete('/detele/products/all/',borrarTodo);
*/
module.exports = router;