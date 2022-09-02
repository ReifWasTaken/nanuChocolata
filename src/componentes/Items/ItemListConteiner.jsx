import React from 'react'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';


export default function ItemListConteiner ({greeting}) {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos]= useState ([]);
    const [error, setError] = useState('');

    useEffect(() =>{
        let itemPromise = new Promise ((res, rej) =>{
            setTimeout(()=>{
                res([
                    {id:1, name: 'chocolate negro', descripcion:'prueba', precio: 150, imagen: ''},
                    {id:2, name: 'Chocolate blanco', descripcion:'prueba', precio: 180, imagen: ''},
                    {id:3, name: 'Huevo de pascua', descripcion:'prueba', precio: 550, imagen: ''},
                    {id:4, name: 'Torta de chocolate', descripcion:'prueba', precio: 1120, imagen: ''},
                    {id:5, name: 'Caja de chocolates', descripcion:'prueba', precio: 2000, imagen: ''}
                  ]);

                rej('error');

            }, 2000);
        })

        itemPromise
        .then((res)=>{
            setProductos(res);
        })
        
        .catch((err)=>{
            setError(err);
        })
        .finally(()=>{
            setLoading(false);
        })

    }, [])


  return (
    <div>
        <p>Loading: {loading ? 'Loading...' : 'fin'} </p>
        <p>Error: {error ? error : null} </p>
        <ItemList productos = {productos}/>
    </div>
  )
}
