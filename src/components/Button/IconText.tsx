import React from 'react';
import styles from '../styles/Button/IconText.module.css'

type Props = {
  icon: string,
  text: string,
  onPress: ()=>void
}

const IconText = ({icon, text, onPress}: Props) => {
  return (
    <div className={styles.shopIcon} onClick={onPress}>
        <img src={`assets/${icon}`} alt="retail"/>
        <div className={styles.shopText}>{text}</div>
    </div>
  );
};

export default IconText;



