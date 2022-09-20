import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'

export default function Cart() {
  const {cart, cartTotal, clear} = useContext(CartContext)
  const navegar = useNavigate()
  return (
    <div>
      {
        !cart.length
        ?<div>
          <h2> Carrito Vacio </h2>
          <h3>Proba nuestros productos</h3>
          <button onClick={()=>navegar('/')}>Comprar cosas!</button>
         </div>
        :<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2>Tu carrito </h2>
          {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}

          <span>Total: ${cartTotal()}</span>
          <button onClick={clear}>Vaciar Carrito</button>
          <button>Ir a pagar</button>
        </div>
      }
    </div>
  )
}
