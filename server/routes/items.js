var express = require('express');
var router = express.Router();
const {item, itemsList, consultaAxios} = require('../controller/controller.js');

router.get('/', item);
router.get('/list', itemsList);
router.get('/pokemon', consultaAxios);

module.exports = router;