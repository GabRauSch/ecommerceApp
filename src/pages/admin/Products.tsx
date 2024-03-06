import React, { ReactNode } from 'react';
import styles from '../styles/admin/Admin.module.css'
import Card from '../../components/Element/Card';
import Standard from '../../components/Button/Standard';
const Products = () => {
  return (
    <>
       <section  className={styles.page} id={styles.sales}>
            <div className={styles.pageTitle}>Produtos</div>
            <div className={styles.pageCards}>
                <div className={[styles.cardButton, styles.active].join(' ')}>
                    <div className={styles.cardValue}>produtos</div>
                </div>
                <div className={styles.cardButton}>
                    <div className={styles.cardValue}>categorias</div>
                </div>
                <div className={styles.cardButton}>
                    <div className={styles.cardValue}>promoções</div>
                </div>
                <div className={styles.cardButton}>
                    <div className={styles.cardValue}>alterar vários</div>
                </div>
                <div className={styles.cardButton}>
                    <div className={styles.cardValue}>deletar vários</div>
                </div>
            </div>
            <div className={styles.pageAnalysis}>
                <Card title="Produtos › Canecas">
                    <>
                        <div className={styles.singleCardFilter}>
                            <select name="filter" id="field">
                                <option value="">Sem filtro</option>
                                <option value="">Local</option>
                                <option selected value="">Compras</option>
                                <option value="">Local</option>
                                <option value="">Em estoque</option>
                                <option value="">Status</option>
                                <option value="">Info</option>
                            </select>
                            <select name="filter" id="value">
                                <option value="">Todos</option>
                                <option selected value="">maior que </option>
                                <option value="">menor que </option>
                            </select>
                            <input className={styles.filter} type="number" />
                        </div>
                        <div className={styles.cardTable}>
                            <div className={styles.tableHeader}>
                                <div className={styles.tableHeaderItem}>Imagens</div>
                                <div className={styles.tableHeaderItem}>Produto</div>
                                <div className={styles.tableHeaderItem}>Preço</div>
                                <div className={styles.tableHeaderItem}>Desconto</div>
                                <div className={styles.tableHeaderItem}>Preço final</div>
                                <div className={styles.tableHeaderItem}>Quantidade em estoque</div>
                                <div className={styles.tableHeaderItem}>Vendas</div>
                                <div className={styles.tableHeaderItem}>Categoria</div>
                            </div>
                            <div className={styles.tableBody}>
                                <div className={styles.tableBodyItem}>
                                    <div className={styles.cardImage}>
                                        <img src="/assets/capricornio.png" alt="" />
                                    </div>
                                </div>
                                <div className={styles.tableBodyItem}>Caneca de capricórnio</div>
                                <div className={styles.tableBodyItem}>R$120,00</div>
                                <div className={styles.tableBodyItem}>10%</div>
                                <div className={styles.tableBodyItem}>R$108,00</div>
                                <div className={styles.tableBodyItem}>20</div>
                                <div className={styles.tableBodyItem}>130</div>
                                <div className={styles.tableBodyItem}>Canecas</div>
                            </div>
                            <div className={styles.buttonArea}>
                                <div>
                                    <Standard text='Novo produto'/>
                                </div>
                            </div>
                        </div>
                    </>
                </Card>
            </div>
        </section>
    </>
  );
};

export default Products;
