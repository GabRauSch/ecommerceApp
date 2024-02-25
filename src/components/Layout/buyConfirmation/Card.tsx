import React, { ReactNode } from 'react';
import Standard from '../../Button/Standard';
import InfoInput from '../../Interact/InfoInput';

const Card = () => {
  return (
    <div className="buy-choice-area">
        <div className="buy-info-title">Insira informações do cartão</div>
        <div className="choice-area">
            <div className="payment-choice">
                <div className="payment-choice-image">
                    <img src="card.svg" alt="card" />
                </div>
                <div className="payment-choice-description">
                    Cartão de crédito
                </div>
                <div className="payment-choice-alter">Alterar</div>
            </div>
            <div className="payment-card-form">
                <form className="payment-form-inputs">
                    <InfoInput />
                    <InfoInput />
                    <InfoInput />
                    <InfoInput />
                    <InfoInput />
                </form>
                <div className="card-image">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
        <Standard />
    </div>
  );
};

export default Card;
