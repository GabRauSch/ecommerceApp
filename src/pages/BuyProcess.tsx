import React from 'react';
import Header from '../components/Layout/Header';
import BuyChoiceArea from '../components/Layout/BuyChoiceArea';
import SelectItem from '../components/Interact/SelectItem';

const Home: React.FC = () => {
  return (
    <>
    
    {/* LESS INFO */}
    <Header></Header>
    <main>
        <section className="container">
            <aside className="buy-info">
                <div className="buy-info-title">Resumo da compra</div>
                <div className="product-display-area">
                    <div className="product-item-num">produto 1 de 3</div>
                    <div className="buy-info-item buy-info-image">
                        <div className="buy-info-product-display">
                            <div className="buy-info-product">
                                <img src="camiseta-verde.png" alt="camiseta-verde" />
                            </div>
                            <div className="buy-info-name">Camiseta verde daora</div>
                        </div>
                        <div className="buy-next-image">›</div>
                    </div>
                </div>
                <div className="buy-items-list">
                    <div className="buy-info-item">
                        <div className="buy-item-name">Camiseta verde daora</div>
                        <div className="buy-item-price">R$700,00</div>
                    </div>
                    <div className="buy-info-item">
                        <div className="buy-item-name">Boné muito daora</div>
                        <div className="buy-item-price">R$700,00</div>
                    </div>
                    <div className="buy-info-item">
                        <div className="buy-item-name">Frete</div>
                        <div className="buy-item-price  buy-free">Grátis</div>
                    </div>
                </div>
                <div className="buy-info-item">
                    <b className="buy-item-name final-price">Preço final</b>
                    <b className="buy-item-price final-price">R$700,00</b>
                </div>
            </aside>
                <BuyChoiceArea>{/* FORMA DE ENTREGA */}
                    <SelectItem />
                </BuyChoiceArea>
                <BuyChoiceArea>{/* FORMA DE PAGAMENTO */}
                    <SelectItem />
                </BuyChoiceArea>
                <BuyChoiceArea>{/* INFO DO CARTÃO */}
                    <SelectItem />
                </BuyChoiceArea>
             
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
                                <img src="qrcode.png" alt="" />
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
        </section>
    </main>
    </>
  );
};

export default Home;
