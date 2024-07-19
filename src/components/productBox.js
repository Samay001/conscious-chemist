import React, { useState } from 'react';
import './style/productBox.css';
import AddToCart from './addtocartBtn';

const ProductBox = ({ name, price, image1, image2,rating  }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='product-box'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='image-container'>
        <img src={image1} alt={name} className={`product-image ${isHovered ? 'fade-out' : 'fade-in'}`} />
        <img src={image2} alt={name} className={`product-image ${isHovered ? 'fade-in' : 'fade-out'}`} />
      </div>
      <h3 className='product-name'>{name}</h3>
      <h3 className='product-price'>{price}</h3>
      <div className='product-rating'>
        <p>★★★★★ <span className="rating-number">({rating})</span></p>
      </div>
        <AddToCart />
      <p className='discount'>Buy 2 Get 2 Free</p>
    </div>
  );
};

export default ProductBox;
