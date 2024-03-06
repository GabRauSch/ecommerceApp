import React, { useEffect, useState } from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Divider from '../components/Element/Divider';
import BuyProduct from '../components/Layout/BuyProduct';
import ProductDisplay from '../components/Layout/ProductDisplay';
import Comment from '../components/Element/Comment';
import { Product } from '../types/Product';
import { retrieveProduct, retrieveRelatedProduct } from '../api/Product';
import useCookie from '../hooks/Cookies';

const Home = () => {
  const [product, setProduct] = useState<Product>()

  useEffect(()=>{
    const fetchProduct = async () => {
          const response = await retrieveProduct(109);
          if (response.status !== 200) return;    
          setProduct(response.data);          
    };
    fetchProduct();
  }, [])

  return (
    <>
        <Header />
        <main>
            {product &&
              <BuyProduct product={product}/>
            }
            <Divider text="Relacionados"/>
            <ProductDisplay categoryId={7} alreadyRetrieved={109}/>
            <Divider text='Opiniões' />
            <section className="container" id="comments">
                <Comment />
            </section>
        </main>
        <Footer></Footer>
    </>
  );
};

export default Home;
