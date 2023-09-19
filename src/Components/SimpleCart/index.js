import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteCart } from '../store/cart'
import './style.scss'
function Cart() {
    const distpatch = useDispatch()
    const cart = useSelector(state => state.cart)
    console.log(cart);
    return (
        <div className='cont'>
            {cart.cart.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 345 }} key={index}>
                        <CardMedia
                            sx={{ height: 170 }}
                            image={item.thumbnail}
                            title={item.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price : {item.price} $
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" >Place Your Order</Button>
                            <Button size="small" onClick={() => distpatch(deleteCart(item))}>Delete</Button>

                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}


export default Cart
