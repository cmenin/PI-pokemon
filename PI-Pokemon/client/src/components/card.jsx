import React from "react";

export default function Card({name,sprite,types}){
    return(
        <div>
            <h3>{types}</h3>
            <h5>{name}</h5>
            <img src={sprite} alt="img not found" width="200px" height="250px"/>
        </div>
    )
}

//se pasa por props 