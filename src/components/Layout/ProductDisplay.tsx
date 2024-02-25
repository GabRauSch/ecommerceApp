//  receives the type of products (recomendations, most viewed, related) ==> so it knows which paramenters to pass to the API

import React from 'react';
import Product from '../Element/Product';

const ProductDisplay: React.FC = () => {
  return (
    <section className="container" id="most-viewed">
        <Product />
    </section>
  );
};

export default ProductDisplay;
