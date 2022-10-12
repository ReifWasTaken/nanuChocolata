import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
const productosEnElCarrito = JSON.parse(localStorage.getItem('carrito') || '[]')

export const CarProvider = ({children}) => {
const[cart, setCart] = useState(productosEnElCarrito);


const addItem = (item) =>{
  const existInCart = cart.find((product)=> product.id === item.id)
  if (existInCart){
    const newCarrito = cart.map((product)=>{
      if(product.id === item.id){
        return {...product, quantity:product.quantity + item.quantity}
      }else{
        return product
      }
    })
    setCart(newCarrito)
  }else{
      setCart([...cart, item])
  }

}

useEffect(()=>{
  localStorage.setItem('carrito', JSON.stringify(cart))
},[cart])


const clear = () =>{
  setCart([])
}

const removeItem = (id) => {
  setCart(cart.filter((product)=> product.id !== id))
}

const isInCart = (id) => {
  return cart.some((product) => product.id === id)
}

const cartItems = () =>{
  return cart.reduce((acumulador, producto)=>acumulador += producto.quantity, 0)
}

const cartTotal = () => {
  return cart.reduce((acumulador, producto)=> acumulador += producto.price * producto.quantity, 0)
}

  return(
    <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart, cartItems, cartTotal}}>
        {children}
    </CartContext.Provider>
  )
}
export const useCart = () => useContext(CartContext)
