
import axios from 'axios'
const initailState = {
    products: [

    ],
}

export default (state = initailState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'Product':
            return { products: payload }
        case 'ADD_CART':
            const updatedProducts = state.products.map((product) => {
                if (product.id === payload.id && product.stock > 0) {
                    return { ...product, stock: product.stock - 1, inCart: true };
                }
                return product;
            });
            return { ...state, products: updatedProducts };
        case 'DELETE_CART':
            const unDelete = state.products.map((product) => {
                if (product.id === payload.id) {
                    return { ...product, stock: product.stock + 1, inCart: false };
                }
                return product;
            });
            return { ...state, products: unDelete };
        default:
            return state
    }
}

export const product = () => async dispatch => {
    const data = await axios.get('https://dummyjson.com/products')
    dispatch(fetchData(data.data.products))
}

const fetchData = (data) => ({
    type: 'Product',
    payload: data
})