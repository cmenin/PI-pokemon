const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const Pokemon = require('../models/Pokemon');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//get para traer la info de la api.
//async--> funcion asinconas.
const getApiInfo = async () =>{ //se trae la info de la api.
    const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const apiInfo = await /*trae la info de arriba*/ apiUrl.data.map(el => {  //se puede hacer destructuring.
        return {
            name: el.name,
            Vida: el.vida,
            Fuerza: el.fuerza,
            Defensa: el.defensa,
            Velocidad: el.velocidad,
            Altura: el.altura,
            Peso: el.Peso,
            id: el.id  //hay que fijarse en la api como esta puesto.
        }
    }) 
    return apiInfo;
}

//el get para traer la base de datos. para tarer la info se usa un findAll

const getDbInfo = async () =>{
    return await Pokemon.findAll8({ //pokemon es el archivo de la db.
    incluide: { //tiene que incluir.
        model: Type, //para que se relacione.
        atributos:['name'], //tb trae el id.
        through:{ //sobre tal tabla, en este caso, atributos. es una comprobacion, va siempre.
            atributos:[]
        }
    }
    }) 
}

const getAll = async () =>{
    const apiInfo = await getApiInfo(); //la ejecuto porque si no, no me devuelve nada.
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal; //devuelve un arreglo con toda la info.
}

//subrequest -> se debe hacer un map sobre cada elemento.
module.exports = router;
