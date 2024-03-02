import React, { useEffect, useState } from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import ShowCase from '../components/Layout/home/ShowCase';
import Offers from '../components/Layout/home/Offers';
import Divider from '../components/Element/Divider';
import ProductDisplay from '../components/Layout/ProductDisplay';
import Cart from '../components/Layout/Cart';
import ErrorMessage from '../components/Element/ErrorMessage';

const Home: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [error, setError] = useState('')
  
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
    {error &&
      <ErrorMessage message={error} clearError={()=>{setError('')}}/>
    }
      {isCartOpen &&
        <Cart handleToggleCart={toggleCartOpen} />
      }
        <Header icons={true} handleCart={toggleCartOpen}/>
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
