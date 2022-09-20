import React from 'react'
import { useCart } from '../../context/CartContext'

export default function CartItem({compra}) {
   const {removeItem} = useCart()
  return (
    <div style={{display: 'flex', justifyContent:'space-between', padding:'2rem', width:'80%'}}> 
        <img src={compra.image} alt={compra.item}/>
        <span> Cantidad:{compra.quantity}</span>
        <span>${compra.price}</span>
        <button onClick={()=>removeItem(compra.id)}>X</button>
    </div>
  )
}
