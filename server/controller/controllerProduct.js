const fs = require('fs');

const listarProductos = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/product.json','utf-8');
        let dataJson = JSON.parse(data);
        res.status(200).json({ dataJson });
    }
    catch {
        res.status(404).send("no se pudieron mostrar los productos");
    }
}

const agregarProducto = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/product.json','utf-8');           
        let dataJson = JSON.parse(data);
        console.log(dataJson);
        let producto = {
            id:dataJson.length + 1,
            name: req.body.name,
            price: req.body.price,
            url: req.body.url,
            description: req.body.description
        }
        dataJson.push({producto});
        let productJson = JSON.stringify(dataJson,null,2);
        await fs.promises.writeFile(`./db/product.json`,productJson);
        res.status(200).send("Producto Agregado"); 
    }
    catch (error) {
        res.status(400).send("no se pudo guardar el producto");
    }
}

const productoUnitario = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/product.json','utf-8');           
        let dataJson = JSON.parse(data);        
        let dataUnit = dataJson.find((producto) => producto.producto.id == req.params.id);
        res.status(200).json(dataUnit);
    } catch {
        res.status(400).send("Producto no encontrado");
    }
}
    
const editarProducto = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/product.json','utf-8');           
        let dataJson = JSON.parse(data);
        //dar una posicion relativa       
        const id = req.params.id;
        // dar una posicion real.
        const posicion = id-1;
        //colocar la información a actualizar.
        const productoActualizado = {           
                id: id,
                name: req.body.name,
                price: req.body.price,
                url: req.body.url,
                description: req.body.description
        };
        // darle a la información parseada la posición real del producto a actualizar.
        dataJson[posicion] = {producto: productoActualizado};
        let productJson = JSON.stringify(dataJson,null,2);
        await fs.promises.writeFile('./db/product.json',productJson);
    
        res.status(200).send("Producto editado modificado");
    } catch {
        res.status(400).send("Producto no encontrado");
    }
} 

const borrarProducto  = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/product.json','utf-8');           
        let dataJson = JSON.parse(data);
        await fs.promises.unlink('./db/product.json');
                
        let dataClear = dataJson.filter((producto) => producto.producto.id != req.params.id);
        let productJson = JSON.stringify(dataClear,null,2);
        await fs.promises.writeFile('./db/product.json',productJson);
        res.status(200).send("Producto borrado");
    } catch {
        res.status(400).send("No se pudo borrar Producto");
    }
}

const borrarTodo  = async(req, res) => {
    try {
        const data = await fs.promises.readFile('./db/product.json','utf-8');           
        let dataJson = JSON.parse(data);
        dataJsonVacio = [];                
        let productVacio = JSON.stringify(dataJsonVacio,null,2);
        await fs.promises.writeFile('./db/product.json',productVacio);
        res.status(200).send("Base vaciada");
    } catch {
        res.status(400).send("No se pudieron borrar TODOS los productos");
    }
}

module.exports = {listarProductos, agregarProducto, productoUnitario, editarProducto, borrarProducto, borrarTodo}

