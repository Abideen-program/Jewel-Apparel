import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import {ReactComponent as Cart} from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleCartIcon = () => setIsCartOpen(!isCartOpen)

    return (
        <div className='cart-icon-container' onClick={toggleCartIcon}>
            <Cart className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon