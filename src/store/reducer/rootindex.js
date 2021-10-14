import productReducer from ".";
import CartReducer from "./CartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";


const persistconfig={
    key:'root',
    storage,
    whitelist:['CartReducer']

}

const root=combineReducers({
    productReducer,CartReducer
})


export default persistReducer(persistconfig,root);
