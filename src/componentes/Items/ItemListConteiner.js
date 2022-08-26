import React from 'react'

export default function ItemListConteiner ({greeting}) {

  return (
    <div>
        <p style={{ backgroundColor:"pink", color: "red", margin: "3px" }}>{greeting}</p>

        <div style={{ backgroundColor:"brown", color: "pink", margin: "5px" }}>
            Producto 1
        </div>

        <div style={{ backgroundColor:"brown", color: "pink", margin: "5px" }}>
            Producto 2
        </div>

        <div style={{ backgroundColor:"brown", color: "pink", margin: "5px" }}>
            Producto 3
        </div>

        <div style={{ backgroundColor:"brown", color: "pink", margin: "5px" }}>
            Producto 4
        </div>

        <div style={{ backgroundColor:"brown", color: "pink", margin: "5px" }}>
            Producto 5
        </div>


    </div>
  )
}
