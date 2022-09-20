import React from 'react'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../mock/mockData';


export default function ItemListConteiner ({greeting}) {
    const { idcategory} = useParams()
    const [loading, setLoading] = useState(true);
    const [productos, setProductos]= useState ([]);
    const [error, setError] = useState('');


    useEffect(() =>{
        data
        .then((res)=>{
            if(idcategory){
                setProductos(res.filter((item)=> item.category === idcategory))
            }else{
                setProductos(res)
            }
        })
        
        .catch((err)=>{
            setError(err);
        })

        .finally(()=>{
            setLoading(false);
        })

    }, [idcategory])


  return (
    <div>
        <h2>{greeting}</h2>
        <p>Loading: {loading ? 'Loading...' : 'fin'} </p>
        <p>Error: {error ? error : null} </p>
        <ItemList productos = {productos}/>
    </div>
  )
}