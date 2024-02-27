import React from 'react';
import styles from '../../styles/Layout/buyProcess/Cardinfo.module.css'

const CardInfo: React.FC = () => {
  return (
        <div className={styles.choiceArea}>
            <div className={styles.paymentChoice}>
                <div className={styles.paymentChoiceImage}>
                    <img src="assets/card.svg" alt="card" />
                </div>
                <div className={styles.paymentChoiceDescription}>
                    Cartão de crédito
                </div>
                <div className={styles.paymentChoiceAlter}>Alterar</div>
            </div>
            <div className={styles.paymentCardForm}>
                <form className={styles.paymentFormInputs}>
                    <label htmlFor="card-number">
                        Número do cartão
                        <input type="number" />
                    </label>
                    <label htmlFor="full-name">
                        Nome (conforme no cartão)
                        <input type="text" />
                    </label>
                    <div className={styles.cardInfo}>
                        <label htmlFor="expiration-date">
                            Data de vencimento
                            <input type="number" />
                        </label>
                        <label htmlFor="security-code">
                            Código de segurança (CVV)
                            <input type="number" />
                        </label>
                    </div>
                    <label htmlFor="CPF">
                        CPF do titular
                        <input type="text" />
                    </label>
                </form>
                <div className="card-image">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
  );
};

export default CardInfo;
