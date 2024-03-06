import React from 'react';
import SearchInput from '../Interact/SearchInput';
import ExpansibleList from '../Button/ExpansibleList';
import IconText from '../Button/IconText';
import styles from '../styles/Layout/Header.module.css'
import { useNavigate } from 'react-router-dom';

type Props = {
    empty?: boolean,
    icons?: boolean,
    handleCart?: ()=>void
}

const Header = ({empty, icons, handleCart}: Props) => {
    const navigate = useNavigate()
    
    const handlePendentItems = ()=>{
        console.log('handle pendents')
    }

  return (
    <header>
        <div className="container">
            <div className={styles.logoArea} onClick={()=>{navigate('/')}}>
                <img src="kharitaslogo.png" alt="kharitas" />
            </div>
            {empty !== null && !empty ? (
                <>
                    <div className={styles.searchArea}>
                        <ExpansibleList />
                        <SearchInput />
                    </div>
                    <nav className={styles.shop}>
                        {icons !== null && icons && handleCart ? (
                            <>
                            <IconText icon="retail-store-icon.svg" text="Compras" onPress={handlePendentItems}/>
                            <IconText icon="shopping-cart-icon.svg" text="Carrinho" onPress={handleCart}/>
                            <IconText icon="maps-pin-black-icon.svg" text="Onde estamos" onPress={handlePendentItems}/>
                            </>
                        ) : null}
                    </nav>
                </>
            ) : null            
            }

        </div>
    </header>
  );
};

export default Header;
