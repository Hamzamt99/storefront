import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteCart } from '../store/cart'
import './style.scss'
import axios from 'axios';

function Cart() {
    const [cart, setData] = useState([])
    const distpatch = useDispatch()
    const data = useSelector(state => state.cart)
    useEffect(() => {
        axios.get('https://sample-back-end.onrender.com/product').then(data => setData(data.data))
    }, [data])
    return (
        <div className='cont'>
            {cart.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 345 }} key={index}>
                        <CardMedia
                            sx={{ height: 170 }}
                            image={item.thumbnail}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
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
