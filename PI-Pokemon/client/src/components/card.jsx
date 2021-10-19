import React from "react";
import './card.css'


export default function Card({name,sprite,types}){
    return(
        
        <div className='div'>
            <h3 className='name'>{name}</h3>
            <img className='img' src={sprite} alt="img not found" width="200px" height="250px"/>
            <h5 className='type'>{types}</h5>
        </div>
    )
}

//{image ? image: url: https://pbs.twimg.com/profile_images/1178942318981701634/d5qM22Ft_400x400.jpg }
//https://assets.pokemon.com/assets//cms2-es-es/img/watch-pokemon-tv/_tiles/generic/watch-pokemon-tv-169.jpg