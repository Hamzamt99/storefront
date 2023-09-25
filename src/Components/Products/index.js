
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../store/cart';
import { ChakraProvider } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, Image, Stack, Divider, Button, Heading, Text, ButtonGroup } from '@chakra-ui/react'
import { detail } from '../store/products'
import './style.scss';
import { Link } from 'react-router-dom';

function Product() {
    const dispatch = useDispatch()
    const activeCategory = useSelector(state => state.categories.activeCategory)
    const categoryProducts = useSelector(state => state.products)
    const filteredProducts = categoryProducts.products.filter(product => product.category === activeCategory);
    const sliced = filteredProducts.slice(0, 3)
    function detailsHandler(id) {
        dispatch(detail(id))
    }

    return (
        <div>
            <h2>{activeCategory}</h2>
            <div className='con'>
                {sliced.map((product, index) => (
                    <ChakraProvider>
                        <Card maxW='sm' key={index}>
                            <CardBody>
                                <Image
                                    src={product.thumbnail}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    height='50%'
                                />
                                <Stack mt='6'>
                                    <Heading size='md'>{product.title}</Heading>
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
                                        !product.inCart && product.stock !== 0 ?
                                            < Button variant='solid' colorScheme='blue' onClick={() => dispatch(addCart(product))}>
                                                Add to cart
                                            </Button>
                                            :
                                            < Button variant='solid' colorScheme='blue'>
                                                Add to cart
                                            </Button>

                                    }
                                    < Button variant='solid' colorScheme='blue' onClick={() => { detailsHandler(product.id) }}>
                                        <Link to='/details'> Details</Link>
                                    </Button>
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

export default Product;
