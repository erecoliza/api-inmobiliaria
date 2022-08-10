const fs = require('fs');

const listarProductos = async (req, res) => {
    try {
        const data = await fs.promises.readFile('./db/product.json','utf-8');
        let dataJson = JSON.parse(data);
        res.status(200).json({ dataJson });
    }
    catch {
        res.status(404).send("no se pudieron mostrar los productos");
    }
}

const agregarProducto = async (req, res) => {
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


module.exports = {listarProductos, agregarProducto}

