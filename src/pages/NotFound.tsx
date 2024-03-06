import React from 'react';
import styles from './styles/NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    const redirectToMainPage = () => {
        navigate('/');
    };

    return (
        <>
            <div className={styles.title}>404 Página não encontrada</div>
            <div className={styles.button} onClick={redirectToMainPage}>Voltar para a página principal</div>
        </>
    );
};

export default NotFound;
