

import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getPokemon } from '../actions';
import {Link} from "react-router-dom";
import Card from './card';
import Paginado from './paginado';


export default function Home(){
    const dispatch = useDispatch() //utilizar esa constante e ir despachando mis acciones.
    const allpokemon = useSelector((state) => state.pokemon) //lo mismo que usar el mapStateToProps
    console.log(allpokemon, "allP")
    //definir estados locales:
    const [currentPage,setCurrentPage] = useState(1) // pagina actual, y una pagina que me setee la pagina actual. se va a setear en (1) porque siempre voy a arrancar en la primer pagina.
    const [pokemonsPerPage, setPokemonPerPage]= useState(9)//cuantos pokemons tengo por pagina. y va a setear los pokemons por pagina. se pone la cantidad de cartas que se piden por pagina.
    const indicexOfLastPokemon = currentPage * pokemonsPerPage//la pagina actual en la que estoy por la cantidad de personajes por pagina
    const indicexOfFirstPokemon = indicexOfLastPokemon - setPokemonPerPage //indice del ultimo personaje - los personajes por pagina.
   const currentPokemons= allpokemon.slice(indicexOfFirstPokemon,indicexOfLastPokemon) //me va a mostrar los personajes que estan en la pagina actual. slice() corta un arreglo y toma esa porcion dependiendo de lo que le este pasando por parametro.
//en en allpokemon le pido que me agarre el indice del primer personaje y el indice del ultimo personaje.

    const paginado =  (pageNumber) =>{ //le paso numero de la pagina y se setea la pagina en ese numero de pagina.
 setCurrentPage(pageNumber)
    }

    useEffect(()=>{ //traer del estado, los personajes cuando el componente se monta.
dispatch(getPokemon())
    },[dispatch]) //de lo que depende esto. ej: si dependo del dispatch, le indico que se ejecute siempre y cuando suceda lo del dispatch//se pasa el array vacio cuando no depende de nada.


 function handleClick(e){e.preventDefault();
    console.log('entre!!!')
dispatch(getPokemon())
 } 

return (
    <div> 
        <Link to= '/pokemon'>Crear Personaje</Link> 
        <h1>Pokemoooooooon</h1>
        <button  onClick={e => {handleClick(e)}}>
            Volver a cargar todos los personajes
        </button>
        <div>
            <select className="pueba1">
                <option value='asc'>Ascendente</option>
                <option value='desc'>Descendente</option>
            </select>
            <select>
                <option value='attack'>Ascendente fuerza</option>
                <option value='attack'>Descendente fuerza</option>

            </select>
            <select>
                <option value ='All'>Todos</option>
                <option value ='Types'>Tipos</option>
                <option value ='Id'>Existentes</option>
                <option value ='Id'>Creados</option>
            </select>
            <Paginado //renderizamos
            pokemonsPerPage = {pokemonsPerPage}
           allpokemon={allpokemon.length} //porque necesito un estado numerico.
            paginado = {paginado}
            />
            {

currentPokemons?.map((p)=>{ 
                   console.log(p, "p")//currentPokemons
                   console.log(allpokemon,"allP")
                   return(
                       <fragment>
                   <Link to={"/home/" + p.id}>
                   <Card name={p.name} sprite={p.sprite} types={p.types} key={p.id} />
                   </Link>
                        </fragment>
                   )
               })
            }
        </div>
    </div>
)


}

//crear un boton que diga 'Crear personaje'
//siempre el handle va a arriba, a este se le pasa un evento, en este caso va a ayuda a resetaer la pagina
//el preventDefault es preventivo, para que no se recargue la pagina y se rompa.
//para poder mandar las cosas por payload,es a traves de un value, me permite acceder y preguntar dsps
//option siempre con value
//fragment no te genera el espacio que hace el div 

