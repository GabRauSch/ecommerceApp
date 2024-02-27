import React from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import ShowCase from '../components/Layout/home/ShowCase';
import Offers from '../components/Layout/home/Offers';
import Divider from '../components/Element/Divider';
import ProductDisplay from '../components/Layout/ProductDisplay';

const Home: React.FC = () => {
  const products = [{
    image:"capricornio.png", title:"Caneca super legal", discountPrice:"500,00", originalPrice:"750,00"
  }]

  return (
    <>
        <Header/>
        <main>
            <ShowCase/>
            <Offers/>
            <Divider/>
            <ProductDisplay products={products}/>
        </main>
        <Footer />
    </>
  );
};

export default Home;
