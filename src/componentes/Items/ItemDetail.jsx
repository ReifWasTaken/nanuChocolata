import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

 const ItemDetail = ({productosDetail}) => {
  const [contador, setContador] = useState(1)
  const [compra, setCompra] = useState(false)
  const navegar = useNavigate();
  const {item, price, image, stock} = productosDetail

  const onAdd = () => {
    console.log(`Compraste ${contador} ${item}`)
    setCompra(true)
  }

  return (
    
    <div className='card' style={{width:'50rem', backgroundColor:"brown", color: "pink", padding:'5px', margin: "5px" }}>
    
    <div className='cardBody' style={{display:'flex'}}>
        <img src={image} alt={item} style={{width: '10rem'}}/>
        <p className='cardText'>{item}</p>
        <p className='cardText'>${price}</p>
        {!compra
         ? <ItemCount stock ={stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador} />
        : <button onClick={()=>navegar(`/Cart`)}>Ir al carrito</button> }
    </div>
    </div>
  )
}

export default ItemDetail