import React from 'react';
import { connect } from 'react-redux';
import { addCart } from '../store/cart';
import { ChakraProvider } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Divider, Button, Heading, Text, ButtonGroup } from '@chakra-ui/react'

import './style.scss';

function Product(props) {
    const activeCategory = props.store.categories.activeCategory;
    const categoryProducts = props.store.products.products;
    const filteredProducts = categoryProducts.filter(product => product.category === activeCategory);

    return (
        <div>
            <h2>{activeCategory}</h2>
            <div className='con'>
                {filteredProducts.map((product, index) => (
                    <ChakraProvider>
                        <Card maxW='sm' >
                            <CardBody>
                                <Image
                                    src={product.image}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    height='50%'
                                />
                                <Stack mt='6'>
                                    <Heading size='md'>{product.name}</Heading>
                                    <Text>
                                        {product.description}
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        Price : {product.price} $
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        in stock : {product.stock}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup >
                                    {
                                        !product.inCart ?
                                            < Button variant='solid' colorScheme='blue' onClick={() => props.addCart(product)}>
                                                Add to cart
                                            </Button>
                                            :
                                            < Button variant='solid' colorScheme='blue'>
                                                Add to cart
                                            </Button>

                                    }
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </ChakraProvider>
                ))
                }
            </div>
        </div >
    );
}

const mapStateToProps = state => ({
    store: state
});

const mapDispatchToProps = { addCart }

export default connect(mapStateToProps, mapDispatchToProps)(Product);
