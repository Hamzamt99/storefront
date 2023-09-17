import React from 'react';
import { connect } from 'react-redux';
import { addCart } from '../store/cart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.scss';

function Product(props) {
    const activeCategory = props.store.categories.activeCategory;
    const categoryProducts = props.store.products.products;
    const filteredProducts = categoryProducts.filter(product => product.category === activeCategory);

    return (
        <div>
            <h2>{activeCategory}</h2>
            {filteredProducts.map((product, index) => (
                <Card sx={{ maxWidth: 345 }} key={index}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={product.image}
                        title={product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            In stock :   {product.stock}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Details</Button>
                        {
                            !product.inCard ?
                                <Button size="small" onClick={() => props.addCart(product)}>Add to Cart</Button>
                                :
                                <Button size="small" >Add to Cart</Button>

                        }
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({
    store: state
});

const mapDispatchToProps = { addCart }

export default connect(mapStateToProps, mapDispatchToProps)(Product);
