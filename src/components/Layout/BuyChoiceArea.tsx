import React, { ReactNode } from 'react';
import SelectItem from '../Interact/SelectItem';
import Standard from '../Button/Standard';

type Props = {
    children: ReactNode
}

const BuyChoiceArea = ({children}: Props) => {
  return (
    <div className="buy-choice-area">
        <div className="buy-info-title">Escolha a forma de entrega</div>
            <div className="choice-area">
                {children}
            </div>
            <Standard />
        </div>
  );
};

export default BuyChoiceArea;
