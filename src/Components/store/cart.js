const initialState = {
    cart: []
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_CART':
            const existItem = state.cart.find(item => item.id === payload.id);
            if (!existItem) {
                return {
                    ...state,
                    cart: [...state.cart, payload]
                };
            }
            return state
        case 'DELETE_CART':
            const deleteItem = state.cart.filter(item => item.id !== payload.id);
            return {
                cart: deleteItem
            };
        default:
            return state
    }
}

export const addCart = (product) => ({
    type: 'ADD_CART',
    payload: product
})
export const deleteCart = (product) => ({
    type: 'DELETE_CART',
    payload: product
})
