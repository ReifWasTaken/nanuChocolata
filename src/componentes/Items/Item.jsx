import React, { useState, useEffect } from 'react'


export default function Item({producto}) {

    const{id, name, descripcion, precio, imagen} = producto

  return (
    <div style={{ backgroundColor:"brown", color: "pink", margin: "5px" }}>
        <h2>
          {name}
        </h2>

          <img src={imagen} alt={name} />

        <p>
          {descripcion}
        </p>

        <h3>
          {precio}
        </h3>


    </div>
  )
}
