import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
//import reducers from '../reducers/index.js';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index.js";

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
        )
        );

// import { createStore, compose, applyMiddleware} from "redux";
// import rootReducer from "../reducers/index";
// import thunk from "redux-thunk";
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

// export const store = createStore(
//     rootReducer,
//     composeEnhancer(applyMiddleware(thunk))
//   );
  
  