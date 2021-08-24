
import React from "react";
import "./paginado.css"

export default function Paginado ({pokemonsPerPage,allpokemon, paginado}){
    const pageNumbers = []

    for(var i = 1; i<=Math.ceil(allpokemon/pokemonsPerPage);i++){ 
        pageNumbers.push(i);
    }
    return( 
        
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