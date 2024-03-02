import React from 'react';
import styles from '../styles/Interact/SearchInput.module.css'
import { useNavigate } from 'react-router-dom';

const SearchInput: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.searchInput}>
        <div className={styles.searchInputSpace}>
            <input type="text" placeholder="search"/>
        </div>
        <div className={styles.searchIcon} onClick={()=>{navigate('/search')}}>
            <img src="assets/magnifying-glass.svg" alt="maglass"/>
        </div>
    </div>
  );
};

export default SearchInput;
