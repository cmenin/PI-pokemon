import React from "react";
import {Link} from "react-router-dom";

export default function LandingPage(){
    return (
        <div>
            <h1>Bienvenidos a la PokeApi!!!</h1>
            <Link to="/home"> 
                <button>HOME</button>
            </Link>
        </div>
    )
}

//es un link, que cuando haces click te lleva a la otra pagina