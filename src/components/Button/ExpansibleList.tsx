import React from 'react';
import styles from '../styles/Button/ExpansibleList.module.css'

const ExpansibleList: React.FC = () => {
  return (
    <div className={styles.searchFilter}>
        <img src="assets/menu.svg" alt="menu"/>
        <div className={styles.filterText}>Todas</div>
        <div className={styles.openMenu}>›</div>
    </div>
  );
};

export default ExpansibleList;



