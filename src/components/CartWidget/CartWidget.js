import React from 'react';
import carrito from './carrito.png';
import './cartwidget.css'

const CartWidget = () => {
    return (
        <button type='button' className='btn btn-warning position-reative'>
            <img src={carrito} alt='carrito' width='40' />
            <span className='position-absolute top-0 start-100 badge rounded-pill bg-danger'>2</span>
        </button>
    )
}

export default CartWidget; 