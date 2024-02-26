import React from 'react';
import SearchInput from '../Interact/SearchInput';
import ExpansibleList from '../Button/ExpansibleList';
import IconText from '../Button/IconText';
import styles from '../styles/Layout/header.module.css';


const Header: React.FC = () => {
  return (
    <header>
            <div className={styles.container}>
                <div className={styles.logoArea}>
                    <img src="kharitaslogo.png" alt="kharitas" />
                </div>
                <div className={styles.searchArea}>
                    <ExpansibleList />
                    <SearchInput />
                </div>
                <nav className={styles.shop}>
                    <IconText />
                    <IconText />
                    <IconText />
                </nav>
            </div>
        </header>
  );
};

export default Header;
