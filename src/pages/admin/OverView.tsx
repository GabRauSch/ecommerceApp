import React, { ReactNode, useEffect, useState } from 'react';
import styles from '../styles/admin/Admin.module.css'
import Card from '../../components/Element/Card';
import CardValue from '../../components/Element/CardValue';
const OverView = () => {
    const [data, setData] = useState();
    useEffect(()=>{
        const b = {
            boughts: 'compras',
            totalValue: 'valor total',
            totalClients: 'clientes totais',
            newClients: 'clientes novos',
            pastPeriod: 'periodo passado'
        }
    }, [])

  return (
    <>
        <section className={styles.page} id={styles.overView}>
            <div className={styles.pageTitle}>Geral</div>
            <div className={styles.pageCards}>
                <Card title='Compras'>
                    <CardValue value="50"/>
                </Card>
                <Card title='Valor total'>
                    <CardValue value="R$300,00"/>
                </Card>
                <Card title='Clientes totais'>
                    <CardValue value="12"/>
                </Card>
                <Card title='Clientes novos'>
                    <CardValue value="+ 10"/>
                </Card>
                <Card title='Período passado'>
                    <CardValue value="+ 10%"/>
                </Card>
            </div>
            <div className={styles.pageAnalysis}>
                <Card title="Produtos populares">
                    <div className={styles.cardTable}>
                        <div className={styles.tableHeader}>
                            <div className={styles.tableHeaderItem}>Produto</div>
                            <div className={styles.tableHeaderItem}>Vendas</div>
                            <div className={styles.tableHeaderItem}>Total</div>
                            <div className={styles.tableHeaderItem}>Desconto</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.tableBodyItem}>Caneca daora</div>
                            <div className={styles.tableBodyItem}>20</div>
                            <div className={styles.tableBodyItem}>R$120,00</div>
                            <div className={styles.tableBodyItem}>sim</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.tableBodyItem}>Caneca muito louca</div>
                            <div className={styles.tableBodyItem}>15</div>
                            <div className={styles.tableBodyItem}>R$320,00</div>
                            <div className={styles.tableBodyItem}>sim</div>
                        </div>
                    </div>
                </Card>
                <Card title="Filtros">
                    <div className={styles.cardFilters}>
                        <div className={styles.cardArea}>
                            <Card title="Mês">
                                <div className={styles.cardFilter}>
                                    <select>
                                        <option>Todos</option>
                                        <option>Janeiro</option>
                                        <option>Fevereiro</option>
                                        <option>Março</option>
                                        <option>Abril</option>
                                        <option>Maio</option>
                                        <option>Junho</option>
                                        <option>Julho</option>
                                        <option>Agosto</option>
                                        <option>Setembro</option>
                                        <option>Outubro</option>
                                        <option>Novembro</option>
                                        <option>Dezembro</option>
                                    </select>
                                </div>
                            </Card>
                            <Card title="Ano">
                                <div className={styles.cardFilter}>
                                    <select>
                                        <option>Todos</option>
                                        <option>2024</option>
                                    </select>
                                </div>
                            </Card>
                            <Card title="Filial">
                                <div className={styles.cardFilter}>
                                    <select>
                                        <option>Todas</option>
                                        <option>Pinheira</option>
                                    </select>
                                </div>
                            </Card>
                        </div>
                        <div className={styles.cardArea}>
                            <Card title="Análise">
                                <>
                                    <div className={[styles.cardSelection, styles.selected].join(' ')}>
                                        Produtos populares
                                    </div>
                                    <div className={styles.cardSelection}>
                                        Produtos menos populares
                                    </div>
                                    <div className={styles.cardSelection}>
                                        Melhores clientes
                                    </div>
                                    <div className={styles.cardSelection}>
                                        Maiores vendas
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

export default OverView;
