import React, { ReactNode } from 'react';
import SelectItem from '../Interact/SelectItem';
import Standard from '../Button/Standard';


const BuyConfirmation = () => {
  return (
    <div className="buy-choice-area">
        <div className="buy-info-title">Confirme suas informações</div>
        <div className="choice-area">
            <SelectItem  /> {/* INPUT = FALSE */}
            <div className="buy-choice-option">
                <div className="buy-items-list">
                    <div className="buy-info-item-confirmation">
                        <div className="buy-item-name">Camiseta verde daora</div>
                        <div className="buy-item-price">R$700,00</div>
                    </div>
                    <div className="buy-info-item-confirmation">
                        <div className="buy-item-name">Boné muito daora</div>
                        <div className="buy-item-price">R$700,00</div>
                    </div>
                    <div className="buy-info-item-confirmation">
                        <div className="buy-item-name">Frete</div>
                        <div className="buy-item-price  buy-free">Grátis</div>
                    </div>
                </div>
                <div className="buy-info-item-confirmation">
                    <b className="buy-item-name final-price">Preço final</b>
                    <b className="buy-item-price final-price">R$700,00</b>
                </div>
            </div>
        </div>
        <Standard />
    </div> 
  );
};

export default BuyConfirmation;
