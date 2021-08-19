
import React from "react";
import "./paginado.css"

export default function Paginado ({pokemonsPerPage,allpokemon, paginado}){
    const pageNumbers = []

    for(var i = 1; i<=Math.ceil(allpokemon/pokemonsPerPage);i++){ //Math.ciel redondea los personajes, sobre la cantidad de personajes que quiero por pagina
        pageNumbers.push(i);
    }
    return( //esto va a ser lo que renderiza los numeros en si. se le pide que renderice una lista. primero se tiene que fijar si el arreglo pageNumbers tiene algo.
        
        <nav className='navpage'>
            <ul className='paginado'> 
                {pageNumbers && pageNumbers.map(number=> (
                    <li className='number' key={number}>
                    <a href onClick={(e) => paginado(number)}>
                        {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

//voy a hacer un evento que cuando se haga un click le paso mi paginado, que es la constante que es la constante que declare en el home, 
//como se le pasa el numero de la pagina, se le pasa el number, y solo se renderiza mi number