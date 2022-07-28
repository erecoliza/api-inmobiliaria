var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//URN
app.get('/alumnos/listado', (req, res) => {
    //JS Object notacion
    res.json({
        //CLAVE / VALOR
        alumno1: "Juan",
        alumno2: "Pedro",
        alumno3: "Maria",
        cant: 3
    })
})
//rutas parametrisadas
app.get('/alumno/nombre/:nombre/apellido/:apellido', (req, res) => {
    //JS Object notacion
    res.send(`Soy ${req.params.nombre} y mi apellido es ${req.params.apellido}`)
})
//las querys en una ruta
app.get('/persona', (req, res) => {
    //JS Object notacion
    //http://localhost:3000/persona?nombre=Juan&apellido=Romera&dni=25475415
    res.send(`Soy ${req.query.nombre} y mi apellido es ${req.query.apellido}`)
})
// ruta con querys y params
app.get('/persona/nombre/:nombre', (req, res) => {
    //JS Object notacion
    //http://localhost:3000/persona?nombre=Juan&apellido=Romera&dni=25475415
    res.send(`Soy ${req.params.nombre} y mi apellido es ${req.query.apellido}`)
})

/*
app.listen(port, () => {
    //URL
  console.log(`Example app listening on http://localhost:${port}`)
})
*/

module.exports = app;
