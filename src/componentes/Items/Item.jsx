import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Item({producto}) {
    const{item, id, price, image} = producto
    const navegar = useNavigate();
  return (
    
    <div className='card' style={{width:'50rem', backgroundColor:"brown", color: "pink", padding:'5px', margin: "5px" }}>
    
    <div className='cardBody' style={{display:'flex'}}>
        <img src={image} alt={item} style={{width: '10rem'}}/>
        <p className='cardText'>{item}</p>
        <p className='cardText'>${price}</p>

    </div>
      <button className='botonCompra' onClick={()=>navegar(`/product/${id}`)}>Ver detalle</button>
    </div>
  )
}
