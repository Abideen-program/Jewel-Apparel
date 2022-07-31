import Button from '../button/button.component'

import './product-card.styles.scss'
// products: {}
const ProductCard = (props) => {
    const {name, imageUrl, price} = props.product
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />

            <div className="product-card-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={'inverted'}>Add To Cart</Button>
        </div>
    );
}

export default ProductCard