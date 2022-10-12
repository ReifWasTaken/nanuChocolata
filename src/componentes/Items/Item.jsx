import React from 'react'
import { useNavigate } from 'react-router-dom'
 

export default function Item({producto}) {
    const{item, id, price, image} = producto
    const navegar = useNavigate();
  return (
    
    <div className='card' style={{width: '25rem', backgroundColor:"brown", color: "pink", padding:'5px', margin: "5px", display: "inline-block" }}>
     <div style={{ backgroundImage: `url('${image}')`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'contain', width:'100&', height:'25rem'}}/>
    <div className='cardBody'>
        <p className='cardText'>{item}</p>
        <p className='cardText'>${price}</p>

    </div>
      <button className='botonCompra' onClick={()=>navegar(`/product/${id}`)}>Ver detalle</button>
    </div>
  )
}
