const fs = require('fs');

const listarPropiedades = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/propiedades.json','utf-8');
        let dataJson = JSON.parse(data);
        res.status(200).json({ dataJson });
    }
    catch {
        res.status(404).send("no se pudieron mostrar las propiedades");
    }
}

const agregarPropiedad = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/propiedades.json','utf-8');           
        let dataJson = JSON.parse(data);
        console.log(dataJson);
        let propiedad = {
            id: dataJson.length + 1,
            tipoPropiedad: req.body.tipoPropiedad,
            habitaciones: req.body.habitaciones,
            baños: req.body.baños,
            garage: req.body.garage,
            m2: req.body.m2,
            fotos: req.body.fotos,
            ubicacion: req.body.ubicacion,
            precioVenta: req.body.precioVenta, 
            monedaVenta: req.body.monedaVenta,
            descripcion: req.body.descripcion            
        }
        dataJson.push({propiedad});
        let propiedadJson = JSON.stringify(dataJson,null,2);
        await fs.promises.writeFile(`./db/propiedades.json`,propiedadJson);
        res.status(200).send("Propiedad Agregada"); 
    }
    catch (error) {
        res.status(400).send("No se pudo agregar la propiedad a la base de datos");
    }
}

const propiedadUnica = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/propiedades.json','utf-8');           
        let dataJson = JSON.parse(data);        
        let dataUnit = dataJson.find((propiedad) => propiedad.propiedad.id == req.params.id);
        res.status(200).json(dataUnit);
    } catch {
        res.status(400).send("Propiedad no encontrada");
    }
}
    
const editarPropiedad = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/propiedades.json','utf-8');           
        let dataJson = JSON.parse(data);
        //dar una posicion relativa       
        const id = req.params.id;
        // dar una posicion real.
        const posicion = id-1;
        //colocar la información a actualizar.
        const propiedadActualizada = {           
            id: id,
            tipoPropiedad: req.body.tipoPropiedad,
            habitaciones: req.body.habitaciones,
            baños: req.body.baños,
            garage: req.body.garage,
            m2: req.body.m2,
            fotos: req.body.fotos,
            ubicacion: req.body.ubicacion,
            precioVenta: req.body.precioVenta, 
            monedaVenta: req.body.monedaVenta,
            descripcion: req.body.descripcion   
        };
        // darle a la información parseada la posición real del producto a actualizar.
        dataJson[posicion] = {propiedad: propiedadActualizada};
        let propiedadJson = JSON.stringify(dataJson,null,2);
        await fs.promises.writeFile('./db/propiedades.json', propiedadJson);
    
        res.status(200).send("Propiedad editada modificada");
    } catch {
        res.status(400).send("Propiedad no encontrada en la base de datos");
    }
} 

const borrarPropiedad  = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/propiedades.json','utf-8');           
        let dataJson = JSON.parse(data);
        await fs.promises.unlink('./db/propiedades.json');                
        let dataClear = dataJson.filter((propiedad) => propiedad.propiedad.id != req.params.id);
        let propiedadJson = JSON.stringify(dataClear,null,2);
        await fs.promises.writeFile('./db/propiedades.json',propiedadJson);
        res.status(200).send("Propiedad eliminada de la base de datos");
    } catch {
        res.status(400).send("No se pudo eliminar la Propiedad de la base de datos");
    }
}


module.exports = {listarPropiedades, agregarPropiedad, propiedadUnica, editarPropiedad, borrarPropiedad}

