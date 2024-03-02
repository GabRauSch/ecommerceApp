import React, { ReactNode } from 'react';
import styles from '../styles/admin/Admin.module.css'
import Card from '../../components/Element/Card';
import CardValue from '../../components/Element/CardValue';
const WareHouse = () => {
  return (
    <>
       <section  className={styles.page} id={styles.sales}>
            <div className={styles.pageTitle}>Estoque</div>
            <div className={styles.pageCards}>
                <Card title="Id do produto">
                    <div className={styles.cardValue}>Todos</div>
                </Card>
                <Card title="Quantidade em estoque">
                    <div className={styles.cardValue}>30000000</div>
                </Card>
                <Card title="Produto com pendência">
                    <div className={styles.cardValue}>Não</div>
                </Card>
                <Card title="Nivel de correção">
                    <div className={styles.cardValue}>10%</div>
                </Card>
            </div>
            <div className={styles.pageAnalysis}>
                <Card title="Produtos no estoque">
                    <div className={styles.cardTable}>
                        <div className={styles.tableHeader}>
                            <div className={styles.tableHeaderItem}>Produto</div>
                            <div className={styles.tableHeaderItem}>Quantidade</div>
                            <div className={styles.tableHeaderItem}>Estipulada</div>
                            <div className={styles.tableHeaderItem}>Pedidos pendentes</div>
                            <div className={styles.tableHeaderItem}>Situação</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.tableBodyItem}>Caneca daora</div>
                            <div className={styles.tableBodyItem}>20</div>
                            <div className={styles.tableBodyItem}>30</div>
                            <div className={styles.tableBodyItem}>3</div>
                            <div className={styles.tableBodyItem}>Normal</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.tableBodyItem}>Caneca pikas</div>
                            <div className={styles.tableBodyItem}>2</div>
                            <div className={styles.tableBodyItem}>10</div>
                            <div className={styles.tableBodyItem}>6</div>
                            <div className={styles.tableBodyItem}>
                                <div className={styles.pending}>Compra</div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card title="">
                    <div className={styles.cardFilters}>
                        <div className={styles.cardArea}>
                            <Card title="Procure">
                                <>
                                    <select>
                                        <option value="">Id do produto</option>
                                        <option value="">Nome do produto</option>
                                        <option value="">Categoria do produto</option>
                                        <option value="">Filial</option>
                                    </select>
                                    <div className={styles.search}>
                                        <input type="text"  />
                                        <div className={styles.searchButton}>
                                            <img src="assets/magnifying-glass.svg" alt="" />
                                        </div>
                                    </div>
                                </>
                            </Card>
                        </div>
                        <div className={styles.cardArea}>
                            <Card title="Situação">
                                <>
                                    <div className={[styles.cardSelection, styles.selected].join(' ')}>
                                        Normal
                                    </div>
                                    <div className={styles.cardSelection}>
                                        Necessidade de compra
                                    </div>
                                    <div className={styles.cardSelection}>
                                        Sobra
                                    </div>
                                    <div className={styles.cardSelection}>
                                        Zerado
                                    </div>
                                </>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    </>
  );
};

export default WareHouse;
