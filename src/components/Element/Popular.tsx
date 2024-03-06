import React, { useEffect } from 'react';
import styles from '../styles/Element/Popular.module.css'
import Standard from '../Button/Standard';
import { getPublicImage } from '../../utils/public';

type Props = {
  name: string,
  image: string
}

const Popular = ({name, image}: Props) => {
  useEffect(()=>{
    console.log(image)
  }, [])
  
  return (
    <div className={styles.asideProduct}>
        <div className={styles.asideProductInfo}>
            <div className={styles.asideProductName}>{name}</div>
            <div>
              <Standard text="Comprar agora"/>
            </div>
        </div>
        <div className={styles.asideProductImageArea}>
            <img src={getPublicImage(image)} alt="" />
        </div>
    </div>
  );
};

export default Popular;