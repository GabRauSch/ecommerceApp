import React from 'react';
import Standard from '../Button/Standard';

const Product: React.FC = () => {
  return (
    <div className="product">
        <div className="product-image">
            <img src="capricornio.png" alt="" />
        </div>
        <div className="product-info">
            <div className="product-name">Caneca super legal</div>
            <div className="buy-area">
                <s className="product-original-price">R$80,00</s>
                <div className="product-price">R$75,00</div>
                <Standard />
            </div>
        </div>
    </div>
  );
};

export default Product;
