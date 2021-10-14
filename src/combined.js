import productReducer from "./store/reducer/index";
import { createStore } from "redux";
import {persistStore} from 'redux-persist'
import root from './store/reducer/rootindex'



export const store =createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor=persistStore(store);


