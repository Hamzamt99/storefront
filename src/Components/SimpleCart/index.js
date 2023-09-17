import React from 'react'
import { connect } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteCart } from '../store/cart'
function Cart(props) {

    const cart = props.cart.cart
    return (
        <div>
            {cart.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 345 }} key={index}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={item.image}
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
                            <Button size="small">Place Your Order</Button>
                            <Button size="small" onClick={() => props.deleteCart(item)}>Delete</Button>

                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})
const mapDispatchToProps = { deleteCart }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
