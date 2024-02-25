import React, { ReactNode } from 'react';

const InfoInput = () => {
  return (
        <label htmlFor="card-number">
            Número do cartão
            <input type="number" />
        </label>
  );
};

export default InfoInput;
