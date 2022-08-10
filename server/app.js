const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const itemsRouter = require('./routes/items');
const productRouter = require('./routes/product');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);
app.use('/product', productRouter);



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
