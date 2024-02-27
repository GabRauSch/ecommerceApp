import React from 'react';
import Header from '../components/Layout/Header';
import BuyChoiceArea from '../components/Layout/BuyChoiceArea';
import styles from './styles/BuyProcess.module.css'
import PaymentMethod from '../components/Interact/PaymentMethod';
import DeliveryMethod from '../components/Interact/DeliveryMethod';
import CardInfo from '../components/Layout/buyProcess/CardInfo';

const BuyProcess: React.FC = () => {
  return (
    <>
    <Header empty={true}></Header>
    <main>
        <section className="container" id={styles.buyProcess}>
            <aside className={styles.buyInfo}>
                <div className="buyInfoTitle">Resumo da compra</div>
                <div className={styles.productDisplayArea}>
                    <div className={styles.productItemNum}>produto 1 de 3</div>
                    <div className={[styles.buyInfoItem, styles.buyInfoImage].join(' ')}>
                        <div className={styles.buyInfoProductDisplay}>
                            <div className={styles.buyInfoProduct}>
                                <img src="/assets/camiseta-verde.png" alt="camiseta-verde" />
                            </div>
                            <div className={styles.buyInfoName}>Camiseta verde daora</div>
                        </div>
                        <div className={styles.buyNextImage}>›</div>
                    </div>
                </div>
                <div className={styles.buyItemsList}>
                    <div className={styles.buyInfoItem}>
                        <div className={styles.buyItemName}>Camiseta verde daora</div>
                        <div className={styles.buyItemPrice}>R$700,00</div>
                    </div>
                    <div className={styles.buyInfoItem}>
                        <div className={styles.buyItemName}>Boné muito daora</div>
                        <div className={styles.buyItemPrice}>R$700,00</div>
                    </div>
                    <div className={styles.buyInfoItem}>
                        <div className={styles.buyItemName}>Frete</div>
                        <div className={[styles.buyItemPrice, styles.buyFree].join(' ')}>Grátis</div>
                    </div>
                </div>
                <div className={styles.buyInfoItem}>
                    <b className={[styles.buyItemPame, styles.finalPrice].join(' ')}>Preço final</b>
                    <b className={[styles.buyItemPrice, styles.finalPrice].join(' ')}>R$700,00</b>
                </div>
            </aside>
                {/* <BuyChoiceArea title="Escolha a forma de entrega">
                    <DeliveryMethod title="Enviar no endereço" description="Rua Sua Rua Muito linda, 120 - Palhoça" tax="5,00" footer="Escolher outro endereço"/>
                    <DeliveryMethod title="Retirar na loja" description="Rua loja 3000" tax="Grátis" free={true} footer="Retire após aprovação"/>
                </BuyChoiceArea> */}
                {/* <BuyChoiceArea title="Escolha a forma de pagamento">
                    <PaymentMethod title="Pix" description="Aprovação imediata" image="pix.png" />
                    <PaymentMethod title="Cartão" description="Em até 12x" image="card.svg"/>
                </BuyChoiceArea> */}
                <BuyChoiceArea title="Informações do cartão">
                    <CardInfo />
                </BuyChoiceArea>
                {/* <Pix /> */}
        </section>
    </main>
    </>
  );
};

export default BuyProcess;
