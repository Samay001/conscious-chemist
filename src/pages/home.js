import React from 'react';
import './style/home.css';
import Layout from '../components/layout';
import main from '../assets/images/main.webp';
import Catorgorie from '../components/categorieButton';
import Sunscreen from './sunscreen';
import Band from '../components/yellowBand';

const categories = [
  "Sunscreens", "Cleansers", "Moisturizer", "Face Masks", "Body Creams",
  "Performace Serums", "Value Packs", "Sustainable Refills", "Under Eye Care",
  "Toner / Essence"
];

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <img alt="main" className="main responsive-image" />
      </div>
      <div className='moving-band'>
        <Band />
      </div>
      <div className='container-buttons'>
        {categories.map((category, index) => (
          <div key={index}>
            <Catorgorie name={category} />
          </div>
        ))}
      </div>
      <Sunscreen />
    </Layout>
  );
};

export default Home;
