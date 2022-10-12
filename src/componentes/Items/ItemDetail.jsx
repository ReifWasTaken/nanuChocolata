import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ItemCount from './ItemCount';


 const ItemDetail = ({productosDetail}) => {
  const [contador, setContador] = useState(1)
  const [compra, setCompra] = useState(false)
  const navegar = useNavigate();
  const {item, price, image, stock, id, description} = productosDetail
  const{addItem}=useCart()

  const onAdd = () => {
    let agregarCarrito ={
      id,
      item,
      price,
      stock,
      image,
      quantity:contador
    }
    setCompra(true)
    addItem(agregarCarrito)
  }

  return (
    
    <div className='card'  style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem'}}>

    <div className='cardBody' style={{display: 'inline-block'}}>
        <img src={image} alt={item} style={{width: '15rem'}}/>
        <p className='cardText'>{item}</p>        
        <p className='cardText'>${price}</p>        
        <p className='cardText'>{description}</p>

        {!compra
         ? <ItemCount stock ={stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador} />
        : <div style={{display: 'flex', justifyContent:'space-around', alignItems: 'center'}}>
          <button onClick={()=>navegar(`/Cart`)}>Ir al carrito</button>
          <button onClick={()=>navegar(`/`)}>Seguir comprando</button>
        </div> }
    </div>
    </div>
  )
}

export default ItemDetail