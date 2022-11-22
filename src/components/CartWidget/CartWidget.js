import React from 'react';
import carrito from './carrito.png';
import './cartwidget.css'

const CartWidget = () => {
    return (
        <div>
        <a className='nav-carrito' href='#'><img src={carrito} alt='carrito navbar'></img></a>
        <span className='cifra'>3</span>
        </div>
    )
}

export default CartWidget; 