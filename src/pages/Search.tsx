import React from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Product from '../components/Element/Product';
import RangeInput from '../components/Interact/RangeInput';
import OrderBy from '../components/Interact/OrderBy';
import styles from './styles/Search.module.css'
import Standard from '../components/Button/Standard';

const Search: React.FC = () => {
  return (
    <>
        <Header></Header>
        <main>
            <section className="container" id={styles.search}>
                <aside className={styles.filters}>
                    <div className={styles.filterItem}>
                        <div className={styles.filterTitle}>Categoria</div>
                        <div className={styles.filterTextItem}>Camisetas</div>
                        <div className={styles.filterTextItem}>Acessórios</div>
                        <div className={styles.filterTextItem}>Luminárias</div>
                        <div className={styles.filterTextItem}>Canecas</div>
                        <div className={styles.filterTextItem}>Óculos</div>
                    </div>
                    <div className={styles.filterItem}>
                        <div className={styles.filterTitle}>Marcas</div>
                        <div className={styles.filterTextBox}>
                            <input type="checkbox" id="myCheckbox1"/>
                            <label htmlFor="myCheckbox1" className={styles.checkboxCustom}></label>
                            <div>Jupiter</div>
                        </div>
                        <div className={styles.filterTextBox}>
                            <input type="checkbox" id="myCheckbox2"/>
                            <label htmlFor="myCheckbox2" className={styles.checkboxCustom}></label>
                            <div>Addidas</div>
                        </div>
                        <div className={styles.filterTextBox}>
                            <input type="checkbox" id="myCheckbox3"/>
                            <label htmlFor="myCheckbox3" className={styles.checkboxCustom}></label>
                            <div>Nike</div>
                        </div>
                        <div className={styles.filterTextBox}>
                            <input type="checkbox" id="myCheckbox4"/>
                            <label htmlFor="myCheckbox4" className={styles.checkboxCustom}></label>
                            <div>Lacoste</div>
                        </div>
                        <div className={styles.filterTextBox}>
                            <input type="checkbox" id="myCheckbox5"/>
                            <label htmlFor="myCheckbox5" className={styles.checkboxCustom}></label>
                            <div>Outro</div>
                        </div>
                    </div>
                    <div className={styles.filterItem}>
                        <RangeInput />
                    </div>
                    <div>
                        <Standard text="Aplicar"/>
                    </div>
                </aside>
                <div className={styles.productsListArea}>
                    <div className={styles.productsListInfo}>
                        <div className={styles.itemsFound}>3 Itens encontrados</div>
                        <div className={styles.listDisplay}>
                            <OrderBy />
                        </div>
                    </div>
                    <div className={styles.productsList}>
                        <Product image="capricornio.png" title="Caneco" discountPrice="400,00" originalPrice="200,00"/>
                    </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </>
  );
};

export default Search;
