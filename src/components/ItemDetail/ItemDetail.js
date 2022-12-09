import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
    
    return (
        <div className='row'>
            <div className='col-md-4 offset-md-2'>
                <img src={item.imagen} alt={item.nombre} className='img-fluid' />
            </div>
            <div className='col-md-4'>
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p>Disponible en colores: {item.color}</p>
                <h5><b>u$d {item.precio}</b></h5>
                <ItemCount stock={item.stock} />
            </div>
        </div>
    )

}

export default ItemDetail;