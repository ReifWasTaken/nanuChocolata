import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

  const [productosDetail, setProductosDetail] = useState ({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      fetch('https://fakestoreapi.com/products?sort=desc')
      .then((res)=> res.json())
      .then(json=> setProductosDetail(json.find((item) => item.id === 11)))
      .catch(error => console.log('Error al cargar el producto'))
      .finally(()=> setLoading(false))
      }, 2000)

    }, [])
  

  
  return (
  <div>
     {loading ? <p>Cargando... </p> : <ItemDetail productosDetail={productosDetail}/>} 
  </div>
  )
  }
