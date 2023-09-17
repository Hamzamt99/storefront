import sushi from '../assets/sushi.jpg'
import shawram from '../assets/shawram.jpg'
import xbox from '../assets/xbox.jpg'
import pc from '../assets/pc.jpg'
import PlayStation from '../assets/playstaion.jpg'
import batman from '../assets/batman.jpg'
import fifa from '../assets/fifa.jpg'
const initailState = {
    products: [
        { name: 'xBox', category: 'Electronics', image: xbox, description: 'The Xbox is a series of video game consoles known for their gaming performance, multimedia capabilities, and online gaming services.', price: 350, stock: 5 },
        { name: 'PlayStation', category: 'Electronics', image: PlayStation, description: 'PlayStation is a popular brand of video game consoles and related products developed and produced by Sony Interactive Entertainment, a division of Sony Corporation', price: 346, stock: 2 },
        { name: 'PC', category: 'Electronics', image: pc, description: '"PC" is an abbreviation that stands for "Personal Computer." It refers to a broad category of computing devices designed for individual use, as opposed to larger, more specialized computers used by organizations or data centers.', price: 600, stock: 3 },
        { name: 'Sushi', category: 'Food', image: sushi, description: 'Sushi is a popular Japanese dish known for its vinegared rice combined with various ingredients, such as seafood, vegetables, and occasionally tropical fruits', price: 7, stock: 40 },
        { name: 'Shawrama ', category: 'Food', image: shawram, description: 'Shawarma is a Middle Eastern dish that has become popular worldwide due to its delicious flavors and versatility. It typically consists of seasoned and marinated slices of meat (commonly beef, lamb, chicken, or a mixture of these meats) that are stacked on a vertical rotisserie or spit', price: 4, stock: 35 },
        { name: 'Batman', category: 'Games', image: batman, description: 'Batman is a fictional superhero character created by artist Bob Kane and writer Bill Finger. He made his first appearance in DC ComicsDetective Comics #27 in May 1939. Batman is one of the most iconic and enduring superheroes in popular culture', price: 50, stock: 15 },
        { name: 'Fifa 23', category: 'Games', image: fifa, description: 'The "FIFA" series is a popular video game franchise developed and published by EA Sports, a division of Electronic Arts. It is one of the most well-known and successful sports video game franchises globally, focusing on the sport of soccer', price: 60, stock: 40 },

    ],
}

export default (state = initailState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'showProducts':
            return state
        // case 'ADD_CART':
        //     const existItem = state.products.find(item => item.name === payload.name);
        //     const decrement = existItem.stock - 1
        //     return state
        default:
            return state
    }
}


// export const product = (name) => ({
//     type: 'showProducts',
//     payload: name
// })