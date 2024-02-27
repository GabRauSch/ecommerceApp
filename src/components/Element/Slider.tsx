import React from 'react';
import styles from '../styles/Element/Slider.module.css'

const Slider: React.FC = () => {

  return (
    <div className={styles.slider}>
        <div className={[styles.sliderLeftButton, styles.sliderButton].join(' ')}>‹</div>
        <div className={styles.sliderItem} style={{backgroundImage: `url(/assets/slider-image-0.jpg)`}} >
            {/* <div className={styles.sliderTitle}>Roupas da melhor qualidade!</div> */}
            {/* <div className={styles.sliderSubTitle}>Produzidos no Brasil</div> */}
            {/* <div className={styles.buyNowButton}>Comprar agora</div> */}
        </div>
        <div className={[styles.sliderRightButton, styles.sliderButton].join(' ')}>›</div>
    </div>
  );
};

export default Slider;