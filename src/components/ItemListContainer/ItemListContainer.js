import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './item_list_container.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className='saludo'> Bienvenidos a Manzana Store :D </h1>
            <ItemCount stock={10} />
        </div>
    )
}

export default ItemListContainer;