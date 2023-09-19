'use strict'
import axios from "axios"

export const initialState = {
    categories: [

    ],
    activeCategory: null
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'showProducts':
            return { ...state, categories: payload };
        case 'activeCategory':
            return { ...state, activeCategory: payload };
        default:
            return state
    }
}

export const get = () => async dispatch => {
    const data = await axios.get('https://dummyjson.com/products/categories')
    dispatch(dispatcher(data.data))
}
export const dispatcher = (name) => {
    return {
        type: 'showProducts',
        payload: name
    }
}

export const active = (name) => {

    return {
        type: 'activeCategory',
        payload: name
    }
}
