import React from 'react'
import Item from './Item'


export default function ItemList({productos}) {
  return (
    <div >
        {productos.map((producto)=>{
            return <Item key={producto.id} producto = {producto}/>
        })}
    </div>
  )
}
