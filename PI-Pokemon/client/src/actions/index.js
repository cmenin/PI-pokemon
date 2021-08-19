import axios from "axios";

export function getPokemon() {
  console.log(" a ver getPokemon");

  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/pokemon", {}); //va la ruta del back que trae todos los personas. esta es la conexion entre el front y el back

    // console.log(json,"json action")
    // console.log(json.data, "json.data action");

    return dispatch({
      type: "GET_POKEMON", //tipo de accion
      payload: json.data, // info para actualizar
    });
  };
}

export function filterByType(payload) { //
 // console.log(payload, "PAYLOAD DEL ACTION------> VALUE DEL SELECT");
  return {
    type: "FILTER_BY_TYPE",
    payload: payload.toLowerCase(),
  };
}

export function sort_AZ(payload) {
  return {
    type: "SORT_A_Z",
    payload,
  };
}

export function sort_by_attack(payload) {
  console.log(payload);
  return {
    type: "SORT_BY_ATTACK",
    payload,
  };
}

export function isCreated(payload) {
  console.log(payload);
  return {
    type: "IS_CREATED",
    payload,
  };
}

export function getByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemon?name=" + name);
      return dispatch({
        type: "GET_BY_NAME",
        payload: json.data,
      });
    } catch (err) {
      console.log("Pokemon not found");
    } 
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      var theTypes = await axios.get("http://localhost:3001/type");
      console.log(theTypes,"----------------THETYPES----------------")
      return dispatch({
        type: "GET_TYPES",
        payload: theTypes.data,
      });
    } 
    catch (error) {
      console.log(error);
    }
  };
}

export function getByID(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemon/" + id);
      console.log(json.data, "JSON DATA ACTION");
      return dispatch({
        type: "GET_BY_ID",
        payload: json.data,
      });
    } catch (error) {
      console.log("Pokemon not found");
    }
  };
}

export function postPokemon(payload) { 
  return async function (dispatch) {
    const respose = await axios.post("http://localhost:3001/pokemon/", payload);
    return respose;
  };
}
