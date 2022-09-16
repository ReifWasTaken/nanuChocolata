import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CarProvider = ({children}) => {
const[cart, setCart] = useState([]);

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

const clear = () =>{
  setCart([])
}

const removeItem = (id) => {
  setCart(cart.filter((product)=> product.id !== id))
}

const isInCart = (id) => {
  return cart.some((product) => product.id === id)
}

  return(
    <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart}}>
        {children}
    </CartContext.Provider>
  )
}
export const useCart = () => useContext(CartContext)
