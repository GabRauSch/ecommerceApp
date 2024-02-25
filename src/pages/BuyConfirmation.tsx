import React, { ReactNode } from 'react';


const BuyConfirmation = () => {
  return (
    <>
        <header>
            <div className="container">
                <div className="logo-area">
                    <img src="kharitaslogo.png" alt="kharitas" />
                </div>
            </div>
        </header>
        <main>
            <section className="container">
                <div className="message">
                    <div className="payment-image">
                        <img src="payment.svg" alt="payment" />
                    </div>
                    <div className="thanks">Obrigado por comprar com Kharitas!</div>
                </div>
                <div className="confirmation">Seu pagamento foi confirmado, o comprovante será enviado para o email gabrielraulinoschoenell@gmail.com</div>
            </section>
        </main>
    </>
  );
};

export default BuyConfirmation;
