import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { active, get } from '../store/categories';
import { product } from '../store/products';
import { deleteCart } from '../store/cart';
import './style.scss'
import { ChakraProvider } from '@chakra-ui/react';
import { Grid, GridItem, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Category() {
    const [data, setData] = useState([])
    function handleClick(name) {
        dispatch(product())
        dispatch(active(name))
    }
    const dispatch = useDispatch()
    const cartDetails = useSelector(state => state.cart)
    const categories = useSelector(state => state.categories)
    const slicedCategory = categories.categories.slice(0, 5)

    useEffect(() => {
        dispatch(get())
    }, [])
    useEffect(() => {
        axios.get('https://sample-back-end.onrender.com/product')
            .then(data => {
                setData(data.data)
            })
    }, [data])
    return (
        <>
            <ChakraProvider>
                <h1 >Browse Our Category</h1>
                <div className='category'>
                    {
                        categories &&
                        slicedCategory.map(category => {
                            return (
                                <Link key={category} onClick={() => handleClick(category)}>
                                    {category}
                                </Link>
                            )
                        })
                    }
                </div>
                {
                    data.length ?
                        < Grid
                            h='200px'
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                        >
                            <GridItem rowSpan={2} colSpan={1} bg='rgb(221, 221, 221)' > {
                                data &&
                                data.map((item, index) => {
                                    return [<h4>{item.title}</h4>,
                                    <Button colorScheme='red' size='xs' onClick={() => dispatch(deleteCart(item))}>
                                        Delete
                                    </Button>
                                    ]
                                })
                            }</GridItem>
                        </Grid>
                        : null
                }
            </ChakraProvider >
        </>
    )
}



export default Category
