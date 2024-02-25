import React, { useState } from 'react';

const OrderBy = () => {
  return (
    <div className="list-order">
        <div className="list-order-text">Ultímos itens</div>
        <div className="list-order-pointers">
            <div className="list-order-pointer">▲</div>
            <div className="list-order-pointer">▼</div>
        </div>
    </div>
  );
};

export default OrderBy;
