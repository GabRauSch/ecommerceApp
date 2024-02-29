import React, { useEffect, useState } from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import ShowCase from '../components/Layout/home/ShowCase';
import Offers from '../components/Layout/home/Offers';
import Divider from '../components/Element/Divider';
import ProductDisplay from '../components/Layout/ProductDisplay';
import Cart from '../components/Layout/Cart';

const Home: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const toggleCartOpen = ()=>{
    setIsCartOpen(!isCartOpen);
    
    if (!isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  useEffect(()=>{
    toggleCartOpen()
  }, [])

  const products = [{
    image:"capricornio.png", title:"Caneca super legal", discountPrice:"500,00", originalPrice:"750,00"
  }]

  return (
    <>
      {isCartOpen &&
        <Cart handleToggleCart={toggleCartOpen} />
      }
        <Header/>
        <main>
            <ShowCase/>
            <Offers/>
            <Divider text="Mais Comprados"/>
            <ProductDisplay products={products}/>
        </main>
        <Footer />
    </>
  );
};

export default Home;
