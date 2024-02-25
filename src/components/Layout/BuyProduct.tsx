import React from 'react';
import Standard from '../Button/Standard';

const BuyProduct: React.FC = () => {
  return (
    <section className="container" id="product">
        <div className="product-image">
            <img className="product-image-opened" src="bone.png" alt="bone" />
            <div className="product-image-select">
                <div className="product-image-item active-image"><img src="bone.png" alt="" /></div>
                <div className="product-image-item"><img src="bonetras.png" alt="bonetras" /></div>
            </div>
        </div>
        <div className="product-info">
            <div className="product-name">
                <div className="product-name-text">Bone super legal</div>
                <div className="best-choice-sign">
                    <img src="verified.svg" alt="" />
                    Melhor escolha
                </div>
            </div>
            <div className="oficial-sign">Produto oficial</div>
            <div className="product-price-description">
                <s className="product-original-price">R$800,00</s>
                <div className="product-price">R$750,00</div>
            </div>
            <div className="product-description">Bone super legal e super bem feito. Produzido à mão pela equipe mais incrível de todo o planeta, personalizável, feito como você quiser, feito para você. Eu amo você. Eu amo sua mãe, sua mãe é linda</div>
            <div className="product-options">
                <div className="product-option-item">
                    <img src="delivery.svg" alt="delivery" />
                </div>
                <div className="product-option-item">
                    <img src="card.svg" alt="delivery" />
                </div>
                <div className="product-option-item">
                    <img src="certified.svg" alt="delivery" />
                </div>
            </div>
            <div className="buy-area">
                <div className="buy-quantity">
                    Quantidade: 1 ▾
                </div>
                <div className="buy-area-buttons">
                    <div className="buy-button">Comprar</div>
                    <div className="cart-button">Adicionar ao carrinho</div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BuyProduct;
