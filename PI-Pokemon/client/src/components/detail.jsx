import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getByID } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import './details.css'

export default function GetPokemonByID(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getByID(props.match.params.id));
  }, [dispatch]);

  const thePokemons = useSelector((state) => state.detail);
  console.log(thePokemons," THE POKEMONS EL ESTADO DETAIL")
  return (
    <div className='divD'>
      {
        <div className='divdetailS'>
          <h2>{thePokemons.name}</h2>
          <img classname='imgDetail'src={thePokemons.sprite} alt="img not found" width="200px" height="250px"/>
        </div>
        }
        
        {
        <div className='divDet'> 
          <h2>Detail:</h2>
          <p>Type: {thePokemons.types?.map(t=> t.name + " ")}</p>
          <p>Attack: {thePokemons.attack}</p>
          <p>Defense: {thePokemons.defense}</p>
          <p>Speed: {thePokemons.speed}</p>
          <p>Heigth: {thePokemons.height}</p>
          <p>Weight: {thePokemons.weight}</p>
        </div>

        }
      <div className='divBoton'> 
      <Link to= "/home"> HOME </Link>
      </div>
    </div>
  );
}
