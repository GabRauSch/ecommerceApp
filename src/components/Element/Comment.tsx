import React from 'react';
import Standard from '../Button/Standard';
import styles from '../styles/Element/Comment.module.css'

const Comment: React.FC = () => {
  return (
    <div className={styles.comment}>
        <div className={styles.commentHeader}>
            <div className={styles.commentUsername}>João Pedro Becker</div>
            <div className={styles.commentDate}>12 horas atrás</div>
        </div>
        <div className={styles.commentRate}>
            <img src="start-special.svg" alt="" />
            <img src="start-special.svg" alt="" />
            <img src="start-special.svg" alt="" />
            <img src="start-special.svg" alt="" />
            <img src="start-special.svg" alt="" />
        </div>
        <div className={styles.commentBody}>Não serve nem na cabeça do meu pau! Mas é deveras bom</div>
    </div>
  );
};

export default Comment;
