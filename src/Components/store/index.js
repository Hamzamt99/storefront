import { createStore, combineReducers } from "redux";
import categories from "./categories";
import cart from './cart'
import products from "./products";
const reducers = combineReducers({ categories, products, cart });
const store = () => {
    return createStore(reducers)
}

export default store()