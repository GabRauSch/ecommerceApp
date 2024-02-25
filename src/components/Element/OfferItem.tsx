import React from 'react';

const OfferItem: React.FC = () => {
  return (
    <div className="offer-item">
        <div className="offer-item-image">
            <img src="capricornio.png" alt="capricornio" />
        </div>
        <div className="offer-item-name">Caneca Capricórnio</div>
        <div className="offer-item-discount">-20%</div>
    </div>
  );
};

export default OfferItem;
