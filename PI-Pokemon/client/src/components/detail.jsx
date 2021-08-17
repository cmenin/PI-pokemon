// import React, {useState,useEffect} from "react";
// import { Link } from "react-router-dom";
// import { getByID } from "../actions";
// import { useDispatch,useSelector } from "react-redux";

// export default function getPokemonByID(props){
//     const dispatch =useDispatch()
//     useEffect(()=>{
//         dispatch(getByID(props.match.params.id))
//     },[dispatch])

//  const thePokemons= useSelector((state)=> state.detail)
//  return(
//      <div>{
//      <div>
//          <h2>{thePokemons.name}</h2>

//      </div>
//      }
//      </div>
     
//  )
// }