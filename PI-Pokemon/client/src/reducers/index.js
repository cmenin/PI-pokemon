const initialState = {//generar un estado inicial
    pokemon:[],
    typesPok:[],
    detail:[]
   
   }
   const rootReducer = ( state= initialState, action) => {
   switch (action.type) {
       case 'GET_POKEMON':
           return {
               ...state,
               pokemon:action.payload , //pokemon es un arreglo vacio, con esto se manda todo al arreglo.
               typesPok:action.payload  //typesPok es un arreglo vacio, con esto se manda todo al arreglo.
            }

        case 'FILTER_BY_TYPE':
            let allGames= state.pokemon
            const mapeo= allGames.map(p=> {
                return {...p, types: p.types.map(el=>el.name)}
            }) // cambio la forma de guardar los genres, hago un array con los nombres de cada genero
            
            const filtrados= action.payload=== 'All' ? allGames : mapeo.filter(e => {
                return e.types.includes(action.payload)}) // filtro 
            return { 
                ...state,
                typesPok: filtrados
            }////////////////////////////////////////////////// NO FUNCIONA

        case 'SORT_A_Z':
            if(action.payload === "az") return{...state, typesPok:[...state.typesPok].sort((a,b)=> a.name > b.name ? 1 : -1)}    
            return {...state, typesPok:[...state.typesPok].sort((a,b)=> a.name > b.name ? -1 : 1)}
            
        case 'SORT_BY_ATTACK':
            if(action.payload === "strong") return{...state, typesPok:[...state.typesPok].sort((a,b)=> a.attack > b.attack ? 1 : -1)}    
            return {...state, typesPok:[...state.typesPok].sort((a,b)=> a.attack > b.attack ? -1 : 1)}
        
            case 'IS_CREATED': {
                let stateTemp = state.pokemon
                let filterPokemons= action.payload=== "created" ? stateTemp.filter(p=> p.createdInDb): stateTemp.filter(p=> !p.createdInDb)
                return action.payload === "all" ? {...state, typesPok: stateTemp}: {...state, typesPok: filterPokemons}
            }

        case 'GET_BY_NAME':
            {
                return {...state, typesPok: action.payload}
            }
        case 'GET_BY_ID':{
            return {
                ...state, detail: action.payload
            }
        }

        default:
            return state;
   }
   }
   
   export default rootReducer // se exporta para que se pueda importar.