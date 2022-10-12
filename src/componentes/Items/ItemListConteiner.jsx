import React from 'react'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


export default function ItemListConteiner ({greeting}) {
    const { idcategory} = useParams()
    const [loading, setLoading] = useState(true);
    const [productos, setProductos]= useState ([]);
    const [error, setError] = useState('');

    useEffect(()=>{
        setLoading(true)
        const listaProductos = idcategory ?query(collection(db, "products"), where("category", "==", idcategory)) : collection(db, "products")
        getDocs(listaProductos)

        .then((results)=>{
            const lista = results.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setProductos(lista)
        })

        .catch((err)=>{
            setError(err);
            console.log(err);
        })

        .finally(()=>{
            setLoading(false);
        })
    },[idcategory])


  return (
    <div>
        <h2>{greeting}</h2>
        <p>{loading ? 'Loading...' : 'fin'} </p>
        <p>{error ? error : null} </p>
        <ItemList productos = {productos}/>
    </div>
  )
}