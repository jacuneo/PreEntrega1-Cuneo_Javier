import React from 'react';

const ItemDetail = ({item}) => {
    
    return (
        <div className='row'>
            <div className='col-md-4 offset-md-2'>
                <img src={item.imagen} alt={item.nombre} classname='img-fluid' />
            </div>
            <div className='col-md-4'>
                <h1>{item.nombre}</h1>
                <h3>{item.color}</h3>
                <h5><b>u$d {item.precio}</b></h5>
            </div>
        </div>
    )

}

export default ItemDetail;