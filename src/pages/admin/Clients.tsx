import React, { ReactNode } from 'react';
import styles from '../styles/admin/Admin.module.css'
import Card from '../../components/Element/Card';
const Clients = () => {
  return (
    <>
       <section  className={styles.page} id={styles.sales}>
            <div className={styles.pageTitle}>Clientes</div>
            <div className={styles.pageAnalysis}>
                <Card title="Lista de clientes">
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
                                <div className={styles.tableHeaderItem}>Cliente</div>
                                <div className={styles.tableHeaderItem}>Compras</div>
                                <div className={styles.tableHeaderItem}>Local</div>
                                <div className={styles.tableHeaderItem}>Primeira compra</div>
                                <div className={styles.tableHeaderItem}>Ultíma compra</div>
                                <div className={styles.tableHeaderItem}>Total comprado</div>
                            </div>
                            <div className={styles.tableBody}>
                                <div className={styles.tableBodyItem}>Rita Lee</div>
                                <div className={styles.tableBodyItem}>123</div>
                                <div className={styles.tableBodyItem}>Pinheira</div>
                                <div className={styles.tableBodyItem}>14/11/2023</div>
                                <div className={styles.tableBodyItem}>21/02/2024</div>
                                <div className={styles.tableBodyItem}>R$400,00</div>
                            </div>
                            <div className={styles.tableBody}>
                                <div className={styles.tableBodyItem}>Ricardo Lee</div>
                                <div className={styles.tableBodyItem}>120</div>
                                <div className={styles.tableBodyItem}>Pinheira</div>
                                <div className={styles.tableBodyItem}>14/01/2024</div>
                                <div className={styles.tableBodyItem}>21/02/2024</div>
                                <div className={styles.tableBodyItem}>R$200,00</div>
                            </div>
                        </div>
                    </> 
                </Card>
            </div>
        </section>
    </>
  );
};

export default Clients;
