import React from 'react'
import { useCart } from '../../context/CartContext'

export default function CartItem({compra}) {
   const {removeItem} = useCart()
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', width:'100%'}}> 
        <img src={compra.image} alt={compra.item} style={{ width:'10%'}}/>
        <span> Cantidad:{compra.quantity}</span>
        <span>${compra.price}</span>
        <button onClick={()=>removeItem(compra.id)}>X</button>
    </div>
  )
}
