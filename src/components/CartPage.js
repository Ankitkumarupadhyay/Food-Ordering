import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccordianContent from './AccordianContent'
import { clearCart } from '../utils/cartStore'



const CartPage = () => {

    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch()

    const handleCartItem = ()=>{
      dispatch(clearCart());
    }

  return cartItems.length ===0 ? <h1>Your cart is Empty, please add items...</h1> :<>
  <button className='bg-[#FECB0F] absolute  rounded-lg w-20 h-8 ml-32 mt-5 cursor-pointer font-bold' onClick={handleCartItem}>Clear</button>
     <div className='w-8/12 m-auto'>  <AccordianContent data={cartItems} /></div>
  </>
}

export default CartPage
