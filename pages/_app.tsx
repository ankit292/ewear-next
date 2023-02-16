import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubtotal] = useState(0)
  useEffect(() => {
    try {
      if(localStorage.getItem('cart')){
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])
  

  const saveCart = (myCart)=>{
     localStorage.setItem('cart', myCart)
     let subt = 0;
     let keys = Object.keys(cart)
     for(let i = 0; keys.length;i++){
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
     }
     setSubtotal(subt);
  }
  const addToCart = (itemCode, qty, price, pname, size, color)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode] = {qty:1, price, pname, size, color}
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const clearCart = ()=>{
    setCart({})
    saveCart({})
  }
  const removeToCart = (itemCode, qty, price, pname, size, color)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode].qty <= 0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }


  return <>
  <Navbar cart={cart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} subTotal={subTotal}  />
  <Component cart={cart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer />
  </>
}
