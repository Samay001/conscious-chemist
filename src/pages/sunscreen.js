import React from 'react';
import './style/sunscreen.css';
import ProductBox from '../components/productBox';

const Sunscreen = () => {
  const productDetails = [
    {
      name: 'Hybrid SPF 50 PA++++ Sun Drink™️ Water Resistant Unwind | Ceramide Sunscreen',
      price: 'Rs. 599',
      rating: 785,
      image1: 'https://consciouschemist.com/cdn/shop/files/SunDrinkUnwindEdition14_70477b2b-ed06-4e2f-8779-f68e8dacd77b_800x.jpg?v=1716397441',
      image2: 'https://consciouschemist.com/cdn/shop/files/SunDrinkUnwindEdition4-1_800x.jpg?v=1716484026',
    },
    {
      name: 'Body Sunscreen | Broad Spectrum UVA / UVB Protection | SPF 50 PA++++',
      price: 'Rs. 699',
      rating: 585,
      image1: 'https://consciouschemist.com/cdn/shop/files/BodyGuardSunscreenListingImage1_800x.jpg?v=1720458252',
      image2: 'https://consciouschemist.com/cdn/shop/files/BodyGuardSunscreenListingImage14_800x.jpg?v=1720458251',
    },
    {
      name: 'Hybrid Dewy-Finish Ceramide Sunscreen SPF50 PA++++ | Oil Free',
      price: 'Rs. 599',
      rating: 156,
      image1: 'https://consciouschemist.com/cdn/shop/files/SunDrinkSunscreenListingImage14_800x.jpg?v=1716397443',
      image2: 'https://consciouschemist.com/cdn/shop/files/Sun_Drink_Sunscreen_Listing_Image_4-2_800x.jpg?v=1717779959',
    },
    {
      name: 'Multi-Vitamin C Moisturizer + SPF30 PA++ | Brightening Cream',
      price: 'Rs. 499',
      rating: 453,
      image1: 'https://consciouschemist.com/cdn/shop/files/VividCMoisturizerListingImage12_800x.jpg?v=1718816906',
      image2: 'https://consciouschemist.com/cdn/shop/files/Vivid_C_Moisturizer_Listing_Image_16_800x.jpg?v=1718816907',
    },
    {
      name: 'Hybrid Peach Sunscreen | SPF 50 PA++++ | Zero Whitecast',
      price: 'Rs. 499',
      rating: 743,
      image1: 'https://consciouschemist.com/cdn/shop/files/PeachSunscreen_4_2copy.jpg?v=1712768823&width=500',
      image2: 'https://consciouschemist.com/cdn/shop/files/PeachtheSunSunscreenListingImage4-1_800x.jpg?v=1716484025',
    },
    {
      name: 'Niacinamide Sunscreen | SPF 50 PA ++++ & Water Resistant',
      price: 'Rs. 499',
      rating: 524,
      image1: 'https://consciouschemist.com/cdn/shop/files/FlipkartListingLifestyleImagesSH-18.jpg?v=1715619905&width=500',
      image2: 'https://consciouschemist.com/cdn/shop/files/BerryBrightSunscreenListingImage4-1_800x.jpg?v=1716484025',
    },
  ];

  return (
    <>
      <div className='heading-categorie'>
        <h1 className='home-title'>Sunscreens</h1>
      </div>
      <div className='product-box-container'>
        <div className='row'>
          {productDetails.map((product, index) => (
            <div className='product-box' key={index}>
              <ProductBox
                name={product.name}
                price={product.price}
                rating={product.rating}
                image1={product.image1}
                image2={product.image2}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sunscreen;
