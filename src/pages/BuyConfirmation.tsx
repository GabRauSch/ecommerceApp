import React, { ReactNode } from 'react';
import styles from './styles/BuyConfirmation.module.css'
import Header from '../components/Layout/Header';

type Props = {
    email: string
}

const BuyConfirmation = ({email}: Props) => {
  return (
    <>
        <Header empty={true}/>
        <main>
            <section className="container">
                <div className={styles.message}>
                    <div className={styles.paymentImage}>
                        <img src="assets/payment.svg" alt="payment" />
                    </div>
                    <div className={styles.thanks}>Obrigado por comprar com Kharitas!</div>
                </div>
                <div className={styles.confirmation}>Seu pagamento foi confirmado, o comprovante será enviado para o email {email}</div>
            </section>
        </main>
    </>
  );
};

export default BuyConfirmation;
