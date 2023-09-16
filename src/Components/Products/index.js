import React from 'react';
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './style.scss'
function Product(props) {
    const activeCategory = props.products.activeCategory;
    const categoryProducts = props.products.products;
    const filteredProducts = categoryProducts.filter(product => product.category === activeCategory);

    return (
        <div>
            <h2>{activeCategory}</h2>
            {filteredProducts.map((product, index) => (
                <Card key={index} sx={{ maxWidth: 450 }} className='card'>
                    <CardMedia
                        sx={{ height: 160 }}
                        image={`${product.image}`}
                        title={product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({
    products: state
});

export default connect(mapStateToProps)(Product);
