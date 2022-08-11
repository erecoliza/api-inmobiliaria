const axios = require('axios');

const item = (req, res) => {
    res.send("items");
}

const itemsList = (req, res) => {
    res.json({
        item1: "lechuga",
        item2: "Tomate" ,
        item3: "zanahoria"
    })
}

const consultaAxios = async (req, res) => {
    //localhost/ver/${id}
    //localhost?name=${name}
    try {
        const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto",{timeout:10000})
        res.status(200).json({status: respuesta.status, data:respuesta.data})
    } catch (error) {
        //console.log(error)
        res.status(404).json({status: error.respuesta.status, data:error.respuesta.data})
    }
}


module.exports = {item, itemsList, consultaAxios}

