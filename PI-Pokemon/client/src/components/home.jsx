import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getPokemon, filterByType, sort_AZ, sort_by_attack, isCreated } from '../actions';
import {Link} from "react-router-dom";
import Card from './card';
import Paginado from './paginado';
import SearchBar from './searchBar.jsx';
import './home.css'


export default function Home(){
    const dispatch = useDispatch() 
    const allpokemon = useSelector((state) => state.typesPok)
    // console.log(allpokemon, "allP")
    //definir estados locales:
    const [currentPage,setCurrentPage] = useState(1) 
    // eslint-disable-next-line no-unused-vars
    const [pokemonsPerPage, setPokemonPerPage]= useState(9)
    const indicexOfLastPokemon = currentPage * pokemonsPerPage
    const indicexOfFirstPokemon = indicexOfLastPokemon - pokemonsPerPage 
   const currentPokemons= allpokemon.slice(indicexOfFirstPokemon,indicexOfLastPokemon) 


    const paginado =  (pageNumber) =>{ 
 setCurrentPage(pageNumber)
    }

    useEffect(()=>{ 
dispatch(getPokemon())
    },[dispatch]) 


 function handleClick(e){
     e.preventDefault();
    console.log('entre!!!')
dispatch(getPokemon())
 }
 function handleFilterType(e){
     e.preventDefault(); 
     //console.log(e.target.value,"******************** EVENT TARGET VALUE")
     dispatch(filterByType(e.target.value))
 } 

 function handleSort(e){
     e.preventDefault();

     dispatch(sort_AZ(e.target.value))
 } 

 function handleAttack(e){
     e.preventDefault()
     dispatch(sort_by_attack(e.target.value))
 } 
 
 function handleCreate(e){
     e.preventDefault()
     dispatch(isCreated(e.target.value))
 } 

return (
    <body className="pageHome">
    <div> 
        
            <div className="divsearch">
            <SearchBar>
            </SearchBar>
            </div> 
    <a href="/pokemon" class="myButton">Crear Pokemon</a>
            <button className='cargar' onClick={e => {handleClick(e)}}>
                Volver a cargar todos los personajes
            </button>
                {/* <Link to= '/pokemon'>
                    <button class="crear" >Crear Personaje</button>
                    </Link>  */}
   
    
        <h1 className="h1pokemon">-POKEMON-</h1>
        
            <select className="az" onChange={e=>handleSort(e)}>
                <option value='az'>AZ</option>
                <option value='za'>ZA</option>
            </select>
        
            <select className="created" onChange={e=>handleCreate(e)}>
                <option value='all'>All</option>
                <option value='created'>Created</option>
                <option value='existent'>Existent</option>
            </select>


            <select className="fuerza" onChange= {e=>{handleAttack(e)}} >
                <option value='All'>All</option>
                <option value='strong'>Ascendente fuerza</option>
                <option value='weak'>Descendente fuerza</option>
            </select>
        

            <select className="all" onChange={e=> {handleFilterType(e)}}>
            <option value='All'>All</option>
                <option value='Normal'>Normal</option>
                <option value='Fighting'>Fighting</option>
                <option value='Flying'>Flying</option>
                <option value='Poison'>Poison</option>
                <option value='Ground'>Ground</option>
                <option value='Bug'>Bug</option>
                <option value='Rock'>Rock</option>
                <option value='Ghost'>Ghost</option>
                <option value='Steele'>Steele</option>
                <option value='Fire'>Fire</option>
                <option value='Water'>Water</option>
                <option value='Grass'>Grass</option>
                <option value='Electric'>Electric</option>
                <option value='Psychic'>Psychic</option>
                <option value='Ice'>Ice</option>
                <option value='Dragon'>Dragon</option>
                <option value='Dark'>Dark</option>
                <option value='Fairy'>Fairy</option>
                <option value='Unknown'>Unknown</option>
                <option value='Shadow'>Shadow</option>
            </select>

            
            
            <Paginado //renderizamos
            pokemonsPerPage = {pokemonsPerPage}
            allpokemon={allpokemon.length} //porque necesito un estado numerico.
            paginado = {paginado}
            />
            {
                
                currentPokemons?.map((p)=>{ 
                    // console.log(p, "HOME----------------")//currentPokemons
                    // console.log(allpokemon,"allP")
                    return(
                        <fragment>
                   <Link to={"pokemon/" + p.id}>
                   <Card name={p.name} sprite={p.sprite} types={p.types?.map(t=> t+ " - ")} key={p.id} />
                   </Link>
                        </fragment>
                   )
               })
            }
        </div>
        </body>
)


}

//crear un boton que diga 'Crear personaje'
//siempre el handle va a arriba, a este se le pasa un evento, en este caso va a ayuda a resetaer la pagina
//el preventDefault es preventivo, para que no se recargue la pagina y se rompa.
//para poder mandar las cosas por payload,es a traves de un value, me permite acceder y preguntar dsps
//option siempre con value
//fragment no te genera el espacio que hace el div