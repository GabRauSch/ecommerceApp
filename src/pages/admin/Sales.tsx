import styles from '../styles/admin/Admin.module.css'
import Card from '../../components/Element/Card'

const Sales = ()=>{
    return (
        <section  className={styles.page} id={styles.sales}>
            <div className={styles.pageTitle}>Vendas</div>
            <div className={styles.pageCards}>
                <Card title="Vendas totais" color="#000">
                    <div className={styles.cardValue}>50</div>
                </Card>
                <Card title="Vendas totais" color="#090">
                    <div className={styles.cardValue}>48</div>
                </Card>
                <Card title="Vendas totais" color="#f90">
                    <div className={styles.cardValue}>2</div>
                </Card>
                <Card title="Vendas totais" color="#099">
                    <div className={styles.cardValue}>0</div>
                </Card>
                <Card title="Vendas totais" color="#c00">
                    <div className={styles.cardValue}>0</div>
                </Card>
            </div>
            <div className={styles.pageAnalysis}>
                <Card title="Situação das vendas">
                    <>
                        <div className={styles.singleCardFilter}>
                            <select name="filter" id="field">
                                <option value="">Sem filtro</option>
                                <option value="">Id da compra</option>
                                <option value="">Cliente</option>
                                <option value="">Produto</option>
                                <option value="">Valor</option>
                                <option value="">Em estoque</option>
                                <option value="">Status</option>
                                <option value="">Info</option>
                            </select>
                            <select name="filter" id="value">
                                <option value="">Todos</option>
                                <option value="">Entregues</option>
                                <option value="">Pendente de entrega</option>
                                <option value="">Pagamento em aprovação</option>
                                <option value="">Canceladas</option>
                            </select>
                        </div>
                        <div className={styles.cardTable}>
                            <div className={styles.tableHeader}>
                                <div className={styles.tableHeaderItem}>Id da compra</div>
                                <div className={styles.tableHeaderItem}>Cliente</div>
                                <div className={styles.tableHeaderItem}>Produto</div>
                                <div className={styles.tableHeaderItem}>Valor</div>
                                <div className={styles.tableHeaderItem}>Em estoque</div>
                                <div className={styles.tableHeaderItem}>Status</div>
                                <div className={styles.tableHeaderItem}>Info</div>
                            </div>
                            <div className={styles.tableBody}>
                                <div className={styles.tableBodyItem}>123</div>
                                <div className={styles.tableBodyItem}>Rita Lee</div>
                                <div className={styles.tableBodyItem}>Caneca gostosinha</div>
                                <div className={styles.tableBodyItem}>R$100,00</div>
                                <div className={styles.tableBodyItem}>0</div>
                                <div className={styles.tableBodyItem}>
                                    <div className={styles.pending}>Pendente de entrega</div>
                                </div>
                                <div className={styles.tableBodyItem}>Sem itens no estoque
                                </div>
                            </div>
                            <div className={styles.tableBody}>
                                <div className={styles.tableBodyItem}>20</div>
                                <div className={styles.tableBodyItem}>Chavequeira de bandido</div>
                                <div className={styles.tableBodyItem}>Chapéu maluco</div>
                                <div className={styles.tableBodyItem}>R$320,00</div>
                                <div className={styles.tableBodyItem}>12</div>
                                <div className={styles.tableBodyItem}>
                                    <div className={styles.pending}>Pendente de entrega</div>
                                </div>
                                <div className={styles.tableBodyItem}>Não entregue</div>
                            </div>
                        </div>
                    </>
                </Card>
            </div>
        </section>
    )
}

export default Sales 