import React from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import ShowCase from '../components/Layout/home/ShowCase';
import Offers from '../components/Layout/home/Offers';
import Divider from '../components/Element/Divider';
import MostViewed from '../components/Layout/ProductDisplay';
import BuyProduct from '../components/Layout/BuyProduct';
import ProductDisplay from '../components/Layout/ProductDisplay';
import Comment from '../components/Element/Comment';

const Home: React.FC = () => {
  return (
    <>
        <Header />
        <main>
            <BuyProduct />
            <Divider />
            <ProductDisplay />
            <Divider />
            <section className="container" id="comments">
                <Comment />
            </section>
        </main>
        <Footer></Footer>
    </>
  );
};

export default Home;
