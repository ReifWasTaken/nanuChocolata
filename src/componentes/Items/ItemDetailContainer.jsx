import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../mock/mockData';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
  const { idproduct } = useParams()
  const [productosDetail, setProductosDetail] = useState ({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        data
      .then((res)=> setProductosDetail(res.find((item)=> item.id === idproduct)))
      .catch(error => console.log('Error al cargar el producto'))
      .finally(()=> setLoading(false))
      }, 2000)

    }, [idproduct])

  return (
  <div>
     {loading ? <p>Cargando... </p> :<ItemDetail key={productosDetail.id} productosDetail={productosDetail}/>} 
  </div>
  )
  }
