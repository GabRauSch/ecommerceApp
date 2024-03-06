import React, { useEffect, useState } from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import ShowCase from '../components/Layout/home/ShowCase';
import Offers from '../components/Layout/home/Offers';
import Divider from '../components/Element/Divider';
import ProductDisplay from '../components/Layout/ProductDisplay';
import Cart from '../components/Layout/Cart';
import ErrorMessage from '../components/Element/ErrorMessage';
import { retrieveEndingPromotionItems } from '../api/Product';
import useCookie from '../hooks/Cookies';
import PageTitle from '../hooks/PageTitle';

const Home: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [error, setError] = useState('');
  const [promotion, setPromotion] = useState(null);

  useEffect(()=>{
    const fetchPromotions = async ()=>{
      const response = await retrieveEndingPromotionItems(1);

      if(response.status !== 200){
        return 
      }
      setPromotion(response.data);
    }
    fetchPromotions()
  }, [])

  const toggleCartOpen = ()=>{
    setIsCartOpen(!isCartOpen);
    
    if (!isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  const products = [{
    image:"capricornio.png", name:"Caneca super legal", discountPrice:500.00, originalPrice:750.00
  }]

  return (
    <>
    <PageTitle title="Home - Kharitas"/>
    {error &&
      <ErrorMessage message={error} clearError={()=>{setError('')}}/>
    }
      {isCartOpen &&
        <Cart handleToggleCart={toggleCartOpen} />
      }
        <Header icons={true} handleCart={toggleCartOpen}/>
        <main>
            <ShowCase/>
            {(promotion) &&
              <Offers promotion={promotion}/>
             }
            <Divider text="Mais Comprados"/>
            {/* <ProductDisplay products={products}/> */}
        </main>
        <Footer />
    </>
  );
};

export default Home;
