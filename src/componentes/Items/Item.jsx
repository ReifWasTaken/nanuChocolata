import React, { useState, useEffect } from 'react'


export default function Item({producto}) {

    //const{id, name, descripcion, precio, imagen} = producto
    const{title, id, price, description, image} = producto

  return (
    
    <div className='card' style={{width:'50rem', backgroundColor:"brown", color: "pink", padding:'5px', margin: "5px" }}>
    
    <div className='cardBody' style={{display:'flex'}}>
        <img src={image} alt={title} style={{width: '10rem'}}/>
        <p className='cardText'>{title}</p>
        <p className='cardText'>{description}</p>
        <p className='cardText'>${price}</p>

    </div>
      <button className='botonCompra'>Comprar!</button>
    </div>
  )
}
