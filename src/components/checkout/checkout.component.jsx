import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './checkout.styles.scss'

const CheckOut = () => {
    const { cartItems, addItemToCart, removeItemFromCart} = useContext(CartContext)
    return (
        <div>
            <h1>I am the checkout page</h1>
            {
                cartItems.map((cartItem) => {
                    const {id, name, quantity} = cartItem
                    return (
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <br />
                            <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                            <br />
                            <span onClick={() => addItemToCart(cartItem)}>increament</span>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default CheckOut