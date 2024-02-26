import React from 'react';
import SelectBlock from '../../Interact/SelectBlock';
import SelectItem from '../../Interact/SelectItem';

const Pix: React.FC = () => {
  return (
    <div className="buy-choice-area">
        <div className="buy-info-title">Escolha a forma de entrega</div>
            <SelectBlock>
                <SelectItem />
            </SelectBlock>
        <div className="buy-button-area">
            <div className="buy-confirm">Continuar</div>
        </div>
        </div>
  );
};

export default Pix;
