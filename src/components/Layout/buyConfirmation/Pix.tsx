import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

const Pix = ({children}: Props) => {
  return (
    <div className="pix-payment">
        <div className="pix-value-display">confirme o pagamento de R$700</div>
        <div className="scan-area">
            <div className="pix-payment-option">
                <div className="pix-title">Escaneie o QR code para pagar</div>
                <div className="pix-instructions">
                    <ol>
                        <li>Acesse seu Banking ou app de pagamentos</li>
                        <li>Escolha pagar via pix</li>
                        <li>Escaneie o código abaixo:</li>
                    </ol>
                </div>
                <div className="code-area">
                    <div>
                        <img src="qrcode.png" alt=""/>
                    </div>
                </div>
            </div>
            <hr />
            <div className="pix-payment-option">
                <div className="pix-title">Ou copie o código abaixo</div>
                <div className="copy-code-area">
                    <div className="code-text">
                        asdlkfçasdkfjasçdlkfjaçsdlkfjaçsdkfljaçsldkfjçasldkfjçasldkfjçaskdlfjçaskldfjçasldkjfçaslkdfjçaskldfjçaskldfjça
                    </div>
                    <div className="copy">copiar</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Pix;
