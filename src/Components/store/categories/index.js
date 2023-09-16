import sushi from '../../assets/sushi.jpg'
import shawram from '../../assets/shawram.jpg'
import xbox from '../../assets/xbox.jpg'
import pc from '../../assets/pc.jpg'
import PlayStation from '../../assets/playstaion.jpg'
import batman from '../../assets/batman.jpg'
import fifa from '../../assets/fifa.jpg'

export const initialState = {
    categories: [
        { name: 'Food', },
        { name: 'Electronics', },
        { name: 'Games', }
    ],

    products: [
        { name: 'xBox', category: 'Electronics', image: xbox },
        { name: 'PlayStation', category: 'Electronics', image: PlayStation },
        { name: 'PC', category: 'Electronics', image: pc },
        { name: 'Sushi', category: 'Food', image: sushi },
        { name: 'Shawrama ', category: 'Food', image: shawram },
        { name: 'Batman', category: 'Games', image: batman },
        { name: 'Fifa 23', category: 'Games', image: fifa },

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