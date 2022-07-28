var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
   //JS Object notacion
   res.json({
    //CLAVE / VALOR
    alumno1: "Juan",
    alumno2: "Pedro",
    alumno3: "Maria",
    cant: 3
})
});

module.exports = router;
