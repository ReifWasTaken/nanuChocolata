import React from 'react'
import Item from './Item'


export default function ItemDetail({productosDetail}) {
  const{item, id, price, description, image} = productosDetail
  return (
    
    <div className='card' style={{width:'50rem', backgroundColor:"brown", color: "pink", padding:'5px', margin: "5px" }}>
    
    <div className='cardBody' style={{display:'flex'}}>
        <img src={image} alt={item} style={{width: '10rem'}}/>
        <p className='cardText'>{item}</p>
        <p className='cardText'>{description}</p>
        <p className='cardText'>${price}</p>
    </div>
      <button className='botonCompra'>Comprar!</button>
    </div>
  )
}
