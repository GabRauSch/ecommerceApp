import React from 'react';
import SearchInput from '../Interact/SearchInput';
import ExpansibleList from '../Button/ExpansibleList';
import IconText from '../Button/IconText';
import styles from '../styles/Layout/Header.module.css'

type Props = {
    empty?: boolean,
}

const Header = ({empty}: Props) => {
    const handlePendentItems = ()=>{
        console.log('handle pendents')
    }
  return (
    <header>
        <div className="container">
            <div className={styles.logoArea}>
                <img src="kharitaslogo.png" alt="kharitas" />
            </div>
            {empty !== null && !empty ? (
                <>
                    <div className={styles.searchArea}>
                        <ExpansibleList />
                        <SearchInput />
                    </div>
                    <nav className={styles.shop}>
                        <IconText icon="retail-store-icon.svg" text="Compras" onPress={handlePendentItems}/>
                        <IconText icon="shopping-cart-icon.svg" text="Carrinho" onPress={handlePendentItems}/>
                        <IconText icon="maps-pin-black-icon.svg" text="Onde estamos" onPress={handlePendentItems}/>
                    </nav>
                </>
            ) : null            
            }

        </div>
    </header>
  );
};

export default Header;
