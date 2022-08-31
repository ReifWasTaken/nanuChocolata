import React from 'react'

export default function ItemCount({count, handleAumentar, handleRestar, onAdd}) {
  return (
    <div>
      <button onClick = {() => {
        handleRestar();
      }} >-</button>

      <span>{count}</span>

      <button onClick = {() => {
        handleAumentar();
      }} >+</button>

      <div>
      <button onClick = {() => {
        onAdd();
      }} >Agregar al carrito</button>
      </div>

    </div>
   
  )
}
