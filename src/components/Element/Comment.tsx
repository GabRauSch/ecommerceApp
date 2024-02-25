import React from 'react';
import Standard from '../Button/Standard';

const Comment: React.FC = () => {
  return (
    <div className="comment">
        <div className="comment-header">
            <div className="comment-username">João Pedro Becker</div>
            <div className="comment-date">12 horas atrás</div>
        </div>
        <div className="comment-rate">
            <img src="start-special.svg" alt="" />
            <img src="start-special.svg" alt="" />
            <img src="start-special.svg" alt="" />
            <img src="start-special.svg" alt="" />
            <img src="start-special.svg" alt="" />
        </div>
        <div className="comment-body">Não serve nem na cabeça do meu pau! Mas é deveras bom</div>
    </div>
  );
};

export default Comment;
