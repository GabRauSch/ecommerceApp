import styles from '../styles/admin/Admin.module.css'
import Card from '../../components/Element/Card'
import { useEffect, useState } from 'react';
import { findSales, findSalesOverView } from '../../api/Admin';
import TableHeader from '../../components/table/TableHeader';
import TableBody from '../../components/table/TableBody';

const Sales = ()=>{
    const [headers, setHeaders] = useState<string[]>([]);
    const [info, setInfo] = useState([]);
    const [overView, setOverView] = useState<any>({})

    const setSalesOverView = async ()=>{
        const data = await findSalesOverView(1)
        if(data.status !== 200) return;

        setOverView(data.data)
    }

    const setSalesInfo = async ()=>{
        setHeaders([ 'Cliente', 'Produto', 'Valor', 'Em estoque', 'Status', 'Info' ])
        const data = await findSales(1)
        if(data.status !== 200) return;

        setInfo(data.data)
    }

    useEffect(()=>{
        setSalesInfo()
        setSalesOverView()
    }, [])
    return (
        <section  className={styles.page} id={styles.sales}>
            <div className={styles.pageTitle}>Vendas</div>
            <div className={styles.pageCards}>
                <Card title="Vendas totais" color="#000">
                    <div className={styles.cardValue}>{overView?.purchasesCount ?? 0}</div>
                </Card>
                <Card title="Entregues" color="#090">
                    <div className={styles.cardValue}>{overView?.delivered ?? 0}</div>
                </Card>
                <Card title="Pendentes de entrega" color="#f90">
                    <div className={styles.cardValue}>{overView?.pendentDelivery ?? 0}</div>
                </Card>
                <Card title="Pagas esperando aprovação" color="#099">
                    <div className={styles.cardValue}>{overView?.aproved ?? 0}</div>
                </Card>
                <Card title="Vendas com erro" color="#c00">
                    <div className={styles.cardValue}>{overView?.error ?? 0}</div>
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
                            <TableHeader headers={headers}/>
                            <TableBody info={info}/>
                        </div>
                    </>
                </Card>
            </div>
        </section>
    )
}

export default Sales 