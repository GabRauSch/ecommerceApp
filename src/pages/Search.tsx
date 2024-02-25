import React from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Product from '../components/Element/Product';
import RangeInput from '../components/Interact/RangeInput';
import OrderBy from '../components/Interact/OrderBy';

const Home: React.FC = () => {
  return (
    <>
        <Header></Header>
        <main>
            <section className="container" id="search">
                <aside className="filters">
                    <div className="filter-item">
                        <div className="filter-title">Categoria</div>
                        <div className="filter-text-item">Camisetas</div>
                        <div className="filter-text-item">Acessórios</div>
                        <div className="filter-text-item">Luminárias</div>
                        <div className="filter-text-item">Canecas</div>
                        <div className="filter-text-item">Óculos</div>
                    </div>
                    <div className="filter-item">
                        <div className="filter-title">Marcas</div>
                        <div className="filter-text-box">
                            <input type="checkbox" id="myCheckbox1"/>
                            <label htmlFor="myCheckbox1" className="checkbox-custom"></label>
                            <div>Jupiter</div>
                        </div>
                        <div className="filter-text-box">
                            <input type="checkbox" id="myCheckbox2"/>
                            <label htmlFor="myCheckbox2" className="checkbox-custom"></label>
                            <div>Addidas</div>
                        </div>
                        <div className="filter-text-box">
                            <input type="checkbox" id="myCheckbox3"/>
                            <label htmlFor="myCheckbox3" className="checkbox-custom"></label>
                            <div>Nike</div>
                        </div>
                        <div className="filter-text-box">
                            <input type="checkbox" id="myCheckbox4"/>
                            <label htmlFor="myCheckbox4" className="checkbox-custom"></label>
                            <div>Lacoste</div>
                        </div>
                        <div className="filter-text-box">
                            <input type="checkbox" id="myCheckbox5"/>
                            <label htmlFor="myCheckbox5" className="checkbox-custom"></label>
                            <div>Outro</div>
                        </div>
                    </div>
                    <RangeInput />
                </aside>
                <div className="products-list-area">
                    <div className="products-list-info">
                        <div className="items-found">3 Itens encontrados</div>
                        <div className="list-display">
                            <OrderBy />
                        </div>
                    </div>
                    <div className="products-list">
                       <Product />
                    </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </>
  );
};

export default Home;
