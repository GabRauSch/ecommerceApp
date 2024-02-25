//  An item from selectBlock
import React from 'react';

const SelectItem = () => {
  return (
    <div className="buy-choice-option">
        <div className="option-title">
          {/* IF CONFIRMATION, DONT DISPLAY: */}
            <input type="radio" />
            <div className="buy-option-header">
                <div className="buy-option-title">Enviar no endereço</div>
                <div className="buy-option-price">R$5,00</div>
            </div>
        </div>
        <div className="buy-option-info">
            <div className="buy-option-desc">Rua Sua Rua Muito linda, 120 - Palhoça</div>
            <div className="buy-option-footer">Escolher outro endereço</div>
        </div>
    </div>
  );
};

export default SelectItem;
