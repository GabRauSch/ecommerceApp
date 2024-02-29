import React from 'react';
import SelectBlock from '../../Interact/SelectBlock';
import SelectItem from '../../Interact/DeliveryMethod';
import styles from '../../styles/Layout/buyConfirmation/ConfirmInfo.module.css'

const ConfirmInfo: React.FC = () => {
  return (
        <div className={styles.choiceArea}>
            <div className={styles.buyChoiceOption}>
                <div className={styles.optionTitle}>
                    <div className={styles.buyOptionHeader}>
                        <div className={styles.buyOptionTitle}>Enviar no endereço</div>
                        <div className={styles.buyOptionPrice}>R$5,00</div>
                    </div>
                </div>
                <div className={styles.buyOptionInfo}>
                    <div className={styles.buyOptionDesc}>Rua Sua Rua Muito linda, 120 - Palhoça</div>
                    <div className={styles.buyOptionFooter}>Escolher outro endereço</div>
                </div>
            </div>
            <div className={styles.buyChoiceOption}>
                <div className={styles.optionTitle}>
                    <div className={styles.buyOptionHeaderPayment}>
                        <div className={styles.buyOptionImage}>
                            <img src="assets/pix.png" alt=""/>
                        </div>
                        <div className={styles.buyOptionPaymentInfo}>
                            <div className={styles.buyOptionTitle}>Pix</div>
                            <div className={styles.buyOptionDescription}>Aprovação imediata</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.buyChoiceOption}>
                <div className={styles.buyItemsList}>
                    <div className={styles.buyInfoItemConfirmation}>
                        <div className={styles.buyItemName}>Camiseta verde daora</div>
                        <div className={styles.buyItemPrice}>R$700,00</div>
                    </div>
                    <div className={styles.buyInfoItemConfirmation}>
                        <div className={styles.buyItemName}>Boné muito daora</div>
                        <div className={styles.buyItemPrice}>R$700,00</div>
                    </div>
                    <div className={styles.buyInfoItemConfirmation}>
                        <div className={styles.buyItemName}>Frete</div>
                        <div className={[styles.buyItemPrice, styles.buyFree].join(' ')}>Grátis</div>
                    </div>
                </div>
                <div className={styles.buyInfoItemConfirmation}>
                    <b className={[styles.buyItemName, styles.finalPrice].join(' ')}>Preço final</b>
                    <b className={[styles.buyItemPrice, styles.finalPrice].join(' ')}>R$700,00</b>
                </div>
            </div>
        </div>
  );
};

export default ConfirmInfo;
