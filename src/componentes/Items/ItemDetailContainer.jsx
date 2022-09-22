import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
  const { idproduct } = useParams()
  const [productosDetail, setProductosDetail] = useState ({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const detalleProducto = collection(db, "products")
    const refDoc = doc(detalleProducto, idproduct)
    getDoc(refDoc)

    .then((res)=> {
      setProductosDetail({
        id:res.id,
        ...res.data()
      })
    })
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))

  },[idproduct])

  return (
  <div>
     {loading ? <p>Cargando... </p> :<ItemDetail key={productosDetail.id} productosDetail={productosDetail}/>} 
  </div>
  )}
