import React, { ReactNode } from 'react';
import Standard from '../Button/Standard';
import styles from '../styles/Layout/BuyChoiceArea.module.css'

type Props = {
    children: ReactNode,
    title: string
}
const BuyChoiceArea = ({children, title}: Props) => {
  return (
    <div className={styles.buyChoiceArea}>
        <div className="buyInfoTitle">{title}</div>
            <div className={styles.choiceArea}>
                {children}
            </div>
            <div className={styles.buttonArea}>
                <div className={styles.button}>
                    <Standard text="Confirmar" color="#08c"/>
                </div>
            </div>
        </div>
  );
};

export default BuyChoiceArea;
