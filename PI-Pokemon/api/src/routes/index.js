const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const axios = require("axios");
//const Pokemon = require('../models/Pokemon');
const { Type, Pokemon, Pokemon_Type } = require("../db.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//get para traer la info de la api.
//async--> funcion asincronas.
const getApiInfo = async () => {
  //se trae la info de la api.
  const api1 = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const api2 = await axios.get(api1.data.next);
  const arrOfPokemonsTotal = api1.data.results.concat(api2.data.results);
  //console.log(arrOfPokemonsTotal);
  const apiInfo = arrOfPokemonsTotal.map((el) => axios.get(el.url)); 
  

  let pokeInfo = Promise.all(apiInfo) 
    .then((pokemon) => {
      let dataPoke = pokemon.map((pokemon) => pokemon.data);
      let thePokemons = [];
      dataPoke.map((el) => {
        thePokemons.push({
          id: el.id, //hay que fijarse en la api como esta puesto.
          name: el.name,
          hp: el.stats[0].base_stat,
          attack: el.stats[1].base_stat,
          defense: el.stats[2].base_stat,
          speed: el.stats[5].data_stat,
          height: el.height,
          weight: el.weight,
          sprite: el.sprites.other.dream_world.front_default,
          types: el.types.map((el) => el.type.name),
        });
      });
      return thePokemons;
    });
  return pokeInfo;
};



const getDbInfo = async () => {
  return await Pokemon.findAll({
    //pokemon es el archivo de la db.
    incluide: {
      model: Type, 
      attributes: ["name"], 
      through: {
        
        attributes: [],
      },
    },
  });
};

const getAll = async () => {
  const apiInfo = await getApiInfo(); 
  const dbInfo = await getDbInfo();
  const infoTotal = dbInfo.concat(apiInfo);
  return infoTotal; 
};

router.get("/pokemon", async (req, res, next) => { 
  const { name } = req.query; 
  const pokemonTotal = await getAll(); 
  if (name) {
    const pokename = pokemonTotal.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    ); 
    //console.log(pokename);
    pokename.length 
      ? res.status(200).send(pokename) 
      : res.status(404).send("No se encuentra el Pokemon");
  } else {
    
    const thePokemons = await getAll();
    res.status(200).json(thePokemons);
  }
});

router.get("/type", async (req, res, next) => {
  const apitypes = await axios.get("https://pokeapi.co/api/v2/type"); //data.results
  // console.log(apitypes.data)
  const arrTipos = apitypes.data.results.map((el) => {
    
    return { name: el.name }; 
  });
  Type.findOrCreate(arrTipos); 
  const alltypes = await Type.findAll(); 
  res.json(alltypes); 
});

router.post("/pokemon", async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, sprite, type } =
    req.body;
  try {
    // console.log(type, "-------------------------TYPE");
    const createdPokemon = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      sprite,
    });

    const tipos = type.map(async (t) => {
      const pByType = await Type.findByPk(t); //busca por primaeykey-tabla intermedia
      createdPokemon.addTypes(pByType); //agrega prop type
    });

    await Promise.all(tipos);

    res.send("Pokemon creado! :)"); //se crea el pokemon de la const createdPokemon.
  } catch (error) {
    console.log(error);
  }
});

router.get("/pokemon/:id", async (req, res, next) => {
  const { id } = req.params; // cuando es :(dos puntos) es porque viene de la url.
  try {
    //trata de ejecutar la accion
    if (id.length > 10) { 
      //id es mayor a 10 es el id de la bd
      const poke = await Pokemon.findOne({
        //busca uno solo
        where: { id: id }, //donde la condicion sea igual
        include: {
          //que incluiya
          model: Type, //model type
          attributes: ["name"], //name
          through: { attributes: [] }, //tabla intermedia 
        },
      });
    //   console.log(poke);
      return res.status(200).send(poke); //lo que se va a mostrar
    } else {
      //si no
      const idApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); // de la pai

      const infoId = {
        name: idApi.data.name,
        hp: idApi.data.stats[0].base_stat,
        attack: idApi.data.stats[1].base_stat,
        defense: idApi.data.stats[2].base_stat,
        speed: idApi.data.stats[5].base_stat,
        height: idApi.data.height,
        weight: idApi.data.weight,
        sprite: idApi.data.sprites.other.dream_world.front_default,
        type: idApi.data.types.map((el) => el.type.name),
      };
      res.json(infoId); //muestra la info
    }
  } catch (err) {
    //si no se encuentra tira el error
    console.log(err);
  }
});
// matchear = coincidir.
//en el caso que lo que se pase por query se pase con mayuscula, por defecto y lo que traiga de la base de datos sea con minuscula para equipararlo, hay que poner toLowercase(). se pasa por url.
//body se pasa en un post. son los datos que no se ven
//req.query-> los parametros de la ruta.
//por query: se trae desde la url,luego se busca por nombre.
//subrequest -> se debe hacer un map sobre cada elemento.

//carpeta de controladores, para la logica.
module.exports = router;
