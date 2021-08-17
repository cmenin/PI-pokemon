import axios from "axios";


export function getPokemon(){
    
    console.log(' a ver getPokemon')
    
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/pokemon", {
            
        }) //va la ruta del back que trae todos los personas. esta es la conexion entre el front y el back
   
        // console.log(json,"json action")
         console.log(json.data,"json.data action")
    
    return dispatch({
        type:'GET_POKEMON',
        payload: json.data
    })
    }
}

export function filterByType(payload){
    return {
        type: 'FILTER_BY_TYPE',
        payload
    }
}

export function sort_AZ(payload){
    return {
        type: 'SORT_A_Z',
        payload
    }
}

export function sort_by_attack (payload){
    console.log(payload)
    return{
        type: 'SORT_BY_ATTACK',
        payload
    }
}

export function isCreated(payload){
    console.log(payload)
    return{
        type: 'IS_CREATED',
        payload
    }
}

export function getByName(name){
    return async function(dispatch){
        try{
            var json= await axios.get('https://pokeapi.co/api/v2/pokemon/{name}' + name)
            return dispatch({
                type: "GET_BY_NAME",
                payload: json.data
            })
        }
        catch(err){
            console.log("Pokemon not found")
        }
    }
}


export function getByID(id){
    return async function(dispatch){
        try{
            var json= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            return dispatch({
                type: "GET_BY_ID",
                payload: json.data
            })
        }
        catch(error){
            console.log("Pokemon not found")
        }
    }
}


// export const getPokemon = () => async (dispatch) => {
//     try {
//       const res = await axios.get("http://localhost:3001/pokemon");
//       dispatch({ type: "GET_POKEMONS", payload: res.data });
//     } catch (err) {
//       console.log(err);
//     }
//   };

// export const filterPokeTypes = () => async (dispatch) => {
//     try {
//       const res = await axios.get('https://pokeapi.co/api/v2/type');
//       dispatch({ type: "FILTER_BY_TYPE", payload: res.data });
//       console.log(dispatch,'dispaaaaatch')

//     } catch (err) {
//       console.log(err);
//     }
//   };
  