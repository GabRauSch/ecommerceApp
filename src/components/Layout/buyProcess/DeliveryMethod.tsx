import React from 'react';
import SelectBlock from '../../Interact/SelectBlock';
import SelectItem from '../../Interact/DeliveryMethod';
const DeliveryMethod: React.FC = () => {
  return (
    <div className="buy-choice-area">
        <div className="buy-info-title">Escolha a forma de entrega</div>
            <SelectBlock>
                <SelectItem title="Enviar no endereço" description="" tax="Rua Sua Rua Muito linda, 120 - Palhoça" footer="Escolher outro endereço"/>

            </SelectBlock>
        <div className="buy-button-area">
            <div className="buy-confirm">Continuar</div>
        </div>
        </div>
  );
};

export default DeliveryMethod;
