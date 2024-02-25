import React from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import ShowCase from '../components/Layout/home/ShowCase';
import Offers from '../components/Layout/home/Offers';
import Divider from '../components/Element/Divider';
import ProductDisplay from '../components/Layout/ProductDisplay';

const Home: React.FC = () => {
  return (
    <>
        <Header/>
        <main>
            <ShowCase/>
            <Offers/>
            <Divider/>
            <ProductDisplay />
        </main>
        <Footer />
    </>
  );
};

export default Home;
