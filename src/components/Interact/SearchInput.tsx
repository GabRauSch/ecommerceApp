import React from 'react';
import styles from '../styles/Interact/SearchInput.module.css'

const SearchInput: React.FC = () => {
  return (
    <div className={styles.searchInput}>
        <div className={styles.searchInputSpace}>
            <input type="text" placeholder="search"/>
        </div>
        <div className={styles.searchIcon}>
            <img src="assets/magnifying-glass.svg" alt="maglass"/>
        </div>
    </div>
  );
};

export default SearchInput;
