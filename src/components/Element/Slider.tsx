import React from 'react';

const Slider: React.FC = () => {
  return (
    <div className="slider">
        <div className="slider-left-button slider-button">‹</div>
        <div className="slider-item">
            {/* <div className="slider-title">Roupas da melhor qualidade!</div> */}
            {/* <div className="slider-sub-title">Produzidos no Brasil</div> */}
            {/* <div className="buy-now-button">Comprar agora</div> */}
        </div>
        <div className="slider-right-button slider-button">›</div>
    </div>
  );
};

export default Slider;