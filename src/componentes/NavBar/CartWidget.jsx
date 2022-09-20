import React from 'react'
import {useCart} from '../../context/CartContext'

export default function CartWidget(contador) {
  const {cartItems} = useCart()

  return (
    <div>🛒{cartItems() || ''}</div>
  )
}

