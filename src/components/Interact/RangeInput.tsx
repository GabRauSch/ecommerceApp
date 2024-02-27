import React from 'react';
import styles from '../styles/Interact/RangeInput.module.css'

const RangeInput: React.FC = () => {
  return (
    <div className={styles.filterItem}>
        <div className={styles.filterTitle}>Preço</div>
        <div className={styles.filterRange}>
            <input type="range" id="filterRange" className={styles.filterRangeInput} min="0" max="100" step=".25"/>
        </div>
        <div className={styles.filterOutput}>
            <div className={styles.filterRangeValues}>
                <div className={styles.filterRangeTitle}>Mín</div>
                <input className={styles.filterRangeValue} value="0"/>
            </div>
            <div className={styles.filterRangeValues}>
                <div className={styles.filterRangeTitle}>Máx</div>
                <input className={styles.filterRangeValue} value="100"/>
            </div>
        </div>
    </div>
  );
};

export default RangeInput;
