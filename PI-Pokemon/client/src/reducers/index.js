


const initialState = {//generar un estado inicial
 pokemon:[],

}
const rootReducer = ( state= initialState, action) => {
switch (action.type) {
    case 'GET_POKEMON':
        return {
            ...state,
            pokemon:action.payload  //pokemon es un arreglo vacio, con esto se manda todo al arreglo.
        }
        default:
            return state;
}
}

export default rootReducer // se exporta para que se pueda importar.