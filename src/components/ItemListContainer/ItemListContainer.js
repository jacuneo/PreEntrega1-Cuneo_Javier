import React, { useEffect, useState } from 'react';
import arrayProductos from '../json/productos.json';
import ItemCount from '../ItemCount/ItemCount';
import './item_list_container.css';
import { json } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const[items, setItems] = useState ([]);

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000); 
        });

        promesa.then((data) => {
            setItems(data);
        })
    });

    return (
        <div className='container'>
            <ItemList items={items} />
            <ItemCount stock={10} />
        </div>
    )
}

export default ItemListContainer;