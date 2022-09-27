import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { useCart } from '../../context/CartContext';
import { clear } from '@testing-library/user-event/dist/clear';
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {
    const [cliente, setCliente] = useState({})
    const [orderID, setOrderID] = useState('')
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false)
    const { cart, cartTotal } = useCart()
    const navigate = useNavigate()

    const datosCliente = (e) =>{
        setCliente({
            ...cliente,
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) =>{
        e.preventDefault()

        if(Object.values(cliente).length!== 3){
            setErr(true)
        }else{
            setErr(false)
            setLoading(true)
        const ventas = collection(db,'orders')
        addDoc(ventas, {
            cliente,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderID(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
        }

    }
    if(loading){
        return <p>Cargando su orden..</p>
    }
  return (
    <div>
    {!orderID ? 
    <div>
        <h2>Los productos ya son casi tuyos!</h2>
        <h4>Complete los siguientes datos</h4>

        <form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={finalizarCompra}>
            <input type="text" placeholder='Nombre y apellido' name='name'onChange={datosCliente}/>
            <input type="number" placeholder='1155555555' name='telephone'onChange={datosCliente}/>
            <input type="email" placeholder='ejemplo@ejemplo.com' name='email'onChange={datosCliente}/>
            <button type='submit'>Finalizar Compra</button>
            { err && <p style= {{color:'red'}}>Por favor complete los datos</p> }
        </form>
        </div>
        :
        <div>
            <h2>Muchas Gracias por su compra</h2>
            <h3>Su orden es: {orderID}</h3>
            <button onClick={()=> navigate('/')}>Volver</button>
        </div>}
    </div>
  )
}
