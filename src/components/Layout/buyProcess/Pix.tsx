import React from 'react';
import styles from '../../styles/Layout/buyProcess/Pix.module.css'

const Pix: React.FC = () => {
  return (
    <div className={styles.pixPayment}>
        <div className={styles.pixValueDisplay}>confirme o pagamento de R$700</div>
        <div className={styles.scanArea}>
            <div className={styles.pixPaymentOption}>
                <div className={styles.pixTitle}>Escaneie o QR code para pagar</div>
                <div className={styles.pixInstructions}>
                    <ol>
                        <li>Acesse seu Banking ou app de pagamentos</li>
                        <li>Escolha pagar via pix</li>
                        <li>Escaneie o código abaixo:</li>
                    </ol>
                </div>
                <div className={styles.codeArea}>
                    <div>
                        <img src="assets/qrcode.png" alt="" />
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.pixPaymentOption}>
                <div className={styles.pixTitle}>Ou copie o código abaixo</div>
                <div className={styles.copyCodeArea}>
                    <div className={styles.codeText}>
                        asdlkfçasdkfjasçdlkfjaçsdlkfjaçsdkfljaçsldkfjçasldkfjçasldkfjçaskdlfjçaskldfjçasldkjfçaslkdfjçaskldfjçaskldfjça
                    </div>
                    <div className={styles.copy}>copiar</div>
                </div>
            </div>
        </div>
    </div> 
  );
};

export default Pix;
