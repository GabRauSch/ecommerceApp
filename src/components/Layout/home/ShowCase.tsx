import React from 'react';
import Slider from '../../Element/Slider';
import Popular from '../../Element/Popular';
import styles from '../../styles/Layout/home/ShowCase.module.css'

const ShowCase: React.FC = () => {
  return (
    <section className="container" id={styles.showcase}>
        <aside className={styles.leftAside}>
            <div className={styles.asideTitle}>Categorias</div>
            <div className={styles.categoriesList}>
                <div className={styles.category}>Roupas</div>
                <div className={styles.category}>Acessórios</div>
                <div className={styles.category}>Luminárias</div>
                <div className={styles.category}>Canecas</div>
                <div className={styles.category}>Kharitas</div>
                <div className={styles.category}>Especiais</div>
                <div className={styles.moreCategories}>
                    <div className={styles.categoryText}>Mais</div>
                    <div className={styles.moreCategoriesIcon}>›</div>
                </div>
            </div>
        </aside>
        <div className={styles.banner}>
            <Slider />
        </div>
        <aside className={styles.rightAside}>
            <div className={styles.asideTitleBackground}>Populares</div>
            <Popular />
            <Popular />
            <Popular />
        </aside>
    </section>
  );
};

export default ShowCase;
