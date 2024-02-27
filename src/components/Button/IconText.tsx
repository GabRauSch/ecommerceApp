import React from 'react';
import styles from '../styles/Button/IconText.module.css'

type Props = {
  icon: string,
  text: string
}

const IconText = ({icon, text}: Props) => {
  return (
    <div className={styles.shopIcon}>
        <img src={`assets/${icon}`} alt="retail"/>
        <div className={styles.shopText}>{text}</div>
    </div>
  );
};

export default IconText;



