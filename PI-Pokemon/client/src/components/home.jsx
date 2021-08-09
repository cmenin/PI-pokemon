/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getCharacters } from '../actions';
import {Link} from "react-router-dom";
import Card from './card';
import { Fragment } from 'react';

export default function Home(){
    const dispatch = useDispatch() //utilizar esa constante e ir despachando mis acciones.
    const allpokemon = useSelector((state) => state.pomekon) //lo mismo que usar el mapStateToProps

    useEffect(()=>{
dispatch(getCharacters())
    },[dispatch]) //de lo que depende esto. ej: si dependo del dispatch, le indico que se ejecute siempre y cuando suceda lo del dispatch//se pasa el array vacio cuando no depende de nada.


 function handleClick(e){
e.preventDefault();
dispatch(getCharacters())
 } 

return (
    <div>
        <Link to= '/pokemon'>Crear Personaje</Link> 
        <h1>Pokemoooooooon</h1>
        <button  onClick={e => {handleClick(e)}}>
            Volver a cargar todos los personajes
        </button>
        <div>
            <select>
                <option value='asc'>Ascendente</option>
                <option value='desc'>Descendente</option>
            </select>
            <select>
                <option value='asc'>Ascendente fuerza</option>
                <option value='desc'>Descendente fuerza</option>

            </select>
            <select>
                <option value ='All'>Todos</option>
                <option value ='Types'>Tipos</option>
                <option value ='Api'>Existentes</option>
                <option value ='Created'>Creados</option>
            </select>
            {
               allpokemon?.map((p)=>{
                   return(
                       <fragment>
                   <Link to={"/home/" + p.id}>
                   <Card name={p.name} sprite={p.sprites.other.dream_world.front_default} type={p.type} key={p.id} />
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
//para poder mandar las cosas por payload, a traves de un value, me permite acceder y preguntar dsps
//option siempre con value
//fragment no te genera el espacio que hace el div 

