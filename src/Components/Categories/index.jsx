import React from 'react'
import { connect } from 'react-redux';
import { dispatcher } from '../store/categories';
import { deleteCart } from '../store/cart';
import './style.scss'
import { ChakraProvider } from '@chakra-ui/react';
import { Grid, GridItem, Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
function Category(props) {
    const cartDetails = props.cart
    const categories = props.categories
    return (
        <>
            <ChakraProvider>
                <h1 >Browse Our Category</h1>
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
                {
                    cartDetails.length &&
                    < Grid
                        h='200px'
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(5, 1fr)'
                        gap={4}
                    >
                        <GridItem rowSpan={2} colSpan={1} bg='rgb(221, 221, 221)' > {
                            cartDetails &&
                            cartDetails.map((item, index) => {
                                return [<h4>{item.name}</h4>,
                                <Button colorScheme='red' size='xs' onClick={() => props.deleteCart(item)}>
                                    Delete
                                </Button>
                                ]
                            })
                        }</GridItem>
                    </Grid>
                }
            </ChakraProvider >
        </>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    cart: state.cart.cart,
})

const mapDispatchToProps = { dispatcher, deleteCart }

export default connect(mapStateToProps, mapDispatchToProps)(Category)
