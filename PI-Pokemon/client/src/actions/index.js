import axios from "axios";

export function getCharacters(){
    return async function(dispatch){
        var json = await axios ("http://localhost:3001/pokemon",{}); //va la ruta del back que trae todos los personas. esta es la conexion entre el front y el back
    
    return dispatch({
        type:'GET_POKEMON',
        payload: json.data
    })
    }
}                                                                  