import React from 'react'
import './style/addtocartbtn.css'

const addtocartBtn = () => {
  return (
    <div className='addtocart-btn-container'>
        <span><i className="fas fa-shopping-cart"></i></span>
        <button className='addtocart-btn'>ADD TO CART</button>
    </div>
  )
}

export default addtocartBtn