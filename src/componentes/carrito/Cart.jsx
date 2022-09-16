import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function Cart() {
  const {cart} = useContext(CartContext)
  console.log('carrito', cart)
  return (
    <div>
      <button>Borrar Carrito</button>
    </div>
  )
}
