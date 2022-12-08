import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import arrayProductos from '../json/productos.json';

const ItemDetailContainer = () => {
    const[item, setItem] = useState ([]);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === 1));
            }, 2000); 
        });

        promesa.then((data) => {
            setItem(data);
        })
    });

    return (
        <div className='container'>
            <ItemDetail item={item} />
        </div>
    )

}

export default ItemDetailContainer;