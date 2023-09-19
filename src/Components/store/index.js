import { createStore, combineReducers, applyMiddleware } from "redux";
import categories from "./categories";
import cart from './cart'
import products from "./products";
import thunk from './middleWare/thunk'
const reducers = combineReducers({ categories, products, cart });
const store = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default store()