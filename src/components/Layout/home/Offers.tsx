import React from 'react';
import OfferItem from '../../Element/OfferItem';

const Offers: React.FC = () => {
  return (
    <section className="container" id="offers">
        <div className="offers-info-area">
            <div className="offers-info">
                <div className="offers-title">Promoção</div>
                <div className="offers-sub-title">Canecas de signo</div>
                <div className="offer-remaining-time">15:00:00</div>
            </div>
        </div>
        <div className="offer-items">
            <OfferItem />
            <OfferItem />
            <OfferItem />
            <OfferItem />
        </div>
    </section>
  );
};

export default Offers;
