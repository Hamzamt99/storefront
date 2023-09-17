

export const initialState = {
    categories: [
        { name: 'Food', },
        { name: 'Electronics', },
        { name: 'Games', }
    ],
    activeCategory: null
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'showProducts':
            return { ...state, activeCategory: payload };
        default:
            return state
    }
}

export const dispatcher = (name) => {
    return {
        type: 'showProducts',
        payload: name
    }
}
// console.log(payload);
// const allProduct = state.products.map(product => {
//     if (product.category === payload) {
//         return { name: product.name }
//     }
//     return product
// })
// return allProduct