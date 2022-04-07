import React from 'react'
import Logo from '../../images/home.png';
import './home.css'

const Baner = () => {
  return (
   
    <>
        <div className="mainBanner">
      <div className="text">
        <div className="heading">
          <div className="big">
            Hey Hooman! Welcome to <span>Easy Mart</span>
          </div>
          <div className="para">
            Makes Sell and Purchase Easy !!!
          </div>
        </div>
      </div>
      <img src={Logo} className="logoImage" alt="banner" />
    </div>
    <h1 className="head" >Latest Products</h1>
    </>
  )
}

export default Baner;