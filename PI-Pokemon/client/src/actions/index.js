import axios from "axios";


export function getPokemon(){
    
    console.log(' a ver getPokemon')
    
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/pokemon", {

        }) //va la ruta del back que trae todos los personas. esta es la conexion entre el front y el back
   
        console.log(json,"json action")
         console.log(json.data,"json.data action")
    
    return dispatch({
        type:'GET_POKEMON',
        payload: json.data
    })
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