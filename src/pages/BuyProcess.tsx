import React from 'react';
import Header from '../components/Layout/Header';
import BuyChoiceArea from '../components/Layout/BuyChoiceArea';
import styles from './styles/BuyProcess.module.css'
import PaymentMethod from '../components/Interact/PaymentMethod';
import DeliveryMethod from '../components/Interact/DeliveryMethod';
import CardInfo from '../components/Layout/buyProcess/CardInfo';
import Pix from '../components/Layout/buyProcess/Pix';
import AsideBuyInfo from '../components/Layout/buyProcess/AsideBuyInfo';
import ConfirmInfo from '../components/Layout/buyProcess/ConfirmInfo';

const BuyProcess: React.FC = () => {
  return (
    <>
    <Header empty={true}></Header>
    <main>
        <section className="container" id={styles.buyProcess}>
                {/* <AsideBuyInfo /> */}
                {/* <BuyChoiceArea title="Escolha a forma de entrega">
                    <DeliveryMethod title="Enviar no endereço" description="Rua Sua Rua Muito linda, 120 - Palhoça" tax="5,00" footer="Escolher outro endereço"/>
                    <DeliveryMethod title="Retirar na loja" description="Rua loja 3000" tax="Grátis" free={true} footer="Retire após aprovação"/>
                </BuyChoiceArea> */}
                {/* <BuyChoiceArea title="Escolha a forma de pagamento">
                    <PaymentMethod title="Pix" description="Aprovação imediata" image="pix.png" />
                    <PaymentMethod title="Cartão" description="Em até 12x" image="card.svg"/>
                </BuyChoiceArea> */}
                <BuyChoiceArea title="Confirme suas informações">
                  <ConfirmInfo />
                </BuyChoiceArea>
                {/* <BuyChoiceArea title="">
                    <CardInfo />
                </BuyChoiceArea> */}
                {/* <Pix /> */}
        </section>
    </main>
    </>
  );
};

export default BuyProcess;
