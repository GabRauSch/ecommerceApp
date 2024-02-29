import React from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Divider from '../components/Element/Divider';
import BuyProduct from '../components/Layout/BuyProduct';
import ProductDisplay from '../components/Layout/ProductDisplay';
import Comment from '../components/Element/Comment';

const Home: React.FC = () => {
  const products = [{
    image:"capricornio.png", title:"Caneca super legal", discountPrice:"500,00", originalPrice:"750,00"
  }]
  return (
    <>
        <Header />
        <main>
            <BuyProduct />
            <Divider text="Relacionados"/>
            <ProductDisplay products={products}/>
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
