
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes, getPokemon } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function PokemonCreate(params){
    const dispatch = useDispatch()
    const allTypes= useSelector((state)=> state.stateTypes)
    //console.log(allTypes,"************************************ ALLTYPES")
    const [form, setForm]= useState({
         type: []
    })

    const history = useHistory()

    useEffect(()=>{
        dispatch(getTypes())
    },[])

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleType(e){
        setForm({
            ...form,
            type: [...form.type, e.target.value]
        })
    }

    function handlSubmit(e){
        dispatch(postPokemon(form))
        alert("Pokemon creado")
        setForm({})
        dispatch(getPokemon())
        history.push("/home")
    }

    return(
        <body className='bodycreated'>
        <div>
            <h1>CREATE YOUR POKEMON</h1>
            <Link to="/home"><button>HOME</button></Link>

            <form onSubmit={e=>handlSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input 
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required //no acepta un campo vacio
                />

                <label htmlFor="name">HP:</label>
                <input 
                type="number"
                id="hp"
                name="hp"
                value={form.hp}
                onChange={handleChange}
                required
                />

                <label htmlFor="attack">Attack:</label>
                <input 
                type="number"
                id="attack"
                name="attack"
                value={form.attack}
                onChange={handleChange}
                required
                />


                <label htmlFor="defense">Defense:</label>
                <input 
                type="number"
                id="defense"
                name="defense"
                value={form.defense}
                onChange={handleChange}
                required
                />

                <label htmlFor="speed">Speed:</label>
                <input 
                type="number"
                id="speed"
                name="speed"
                value={form.speed}
                onChange={handleChange}
                required
                />

                <label htmlFor="height">Height:</label>
                <input 
                type="number"
                id="height"
                name="height"
                value={form.height}
                onChange={handleChange}
                required
                />

                <label htmlFor="weight">Weight:</label>
                <input 
                type="number"
                id="weight"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                required
                />

                <label htmlFor="type">Type:
                <select onChange={e=> handleType(e)}
                id="type"
                name="type"
                defaultValue= "">
                    <option name="type" value="">Select</option>
                {
                    allTypes?.map(t=>(
                        <option value={parseInt(t.id)}> {t.name} </option>
                    ))
                }
                </select>
                <ul>
                    <li>{form.allTypes?.map(el=> el.name + " - ")}</li>
                </ul>
                </label>

                <label htmlFor="image">Image:</label>
                <input
                type="text"
                name="sprite"
                id="image"
                onChange={handleChange}
                />

            <button type="submit">CREATE</button>
            </form>
        
        </div>
    
        </body>
    )
}