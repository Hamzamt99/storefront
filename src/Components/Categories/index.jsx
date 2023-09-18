import React from 'react'
import { connect } from 'react-redux';
import { dispatcher } from '../store/categories';
import './style.scss'
import { Link } from 'react-router-dom';
// import { Box ,H} from '@chakra-ui/react';
function Category(props) {
    const cartDetails = props.cart
    const categories = props.categories
    return (
        <>
            <h1 >Browse Our Category</h1>
            {/* <Box>TTTTTTTEst</Box> */}
            <div className='category'>
                {
                    categories &&
                    categories.map(category => {
                        return (
                            <Link key={category.name} onClick={() => props.dispatcher(category.name)}>
                                {category.name}
                            </Link>
                        )
                    })
                }
            </div>

            {cartDetails &&
                cartDetails.map((item, index) => {
                    return <p key={index}>{item.name}</p>
                })}

        </>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    cart: state.cart.cart,
})

const mapDispatchToProps = { dispatcher }

export default connect(mapStateToProps, mapDispatchToProps)(Category)
