import React from 'react'
import Logo from './cart.jpg';
import './cart.css';

const Cart = () => {
  return (

    <div className="papers">
      <h1 className='main'>MY FAVOURITE</h1> 
      <img src={Logo} className="cartimg" alt="banner" />
      <h1 className='main'>Your Easy Mart Basket is empty</h1> 
    </div>
  
  )
}

export default Cart;