import React, { ReactNode, useEffect, useState } from 'react';
import styles from '../styles/admin/Admin.module.css'
import Card from '../../components/Element/Card';
import CardValue from '../../components/Element/CardValue';
import { findClients, findClientsOverView } from '../../api/Admin';
import { clientOverView } from '../../types/Clients';
import TableHeader from '../../components/table/TableHeader';
import TableBody from '../../components/table/TableBody';

const Clients = () => {
    const [overView, setOverView] = useState<clientOverView>();
    const [headers, setHeaders] = useState<string[]>([]);
    const [info, setInfo] = useState<any[]>([])

    const setOverViewInfo = async ()=>{
        const data = await findClientsOverView(1);
        if(data.status !== 200) return 
        
        setOverView(data.data)
    }
    
    const setInfoClients = async ()=>{
        setHeaders(['Cliente', 'Compras', 'Primeira compra', 'Ultíma compra', 'Total comprado'])
        const data = await findClients(1);
        if(data.status !== 200) return 

        setInfo(data.data);
    }

    useEffect(()=>{
        setOverViewInfo()
        setInfoClients()
    }, [])
  return (
    <>
       <section  className={styles.page} id={styles.sales}>
            <div className={styles.pageTitle}>Clientes</div>
            <div className={styles.pageCards}>
                <Card title='Clientes'>
                    <CardValue value={`${overView?.clientsCount ?? 'N/A'}`}/>
                </Card>
                <Card title='Compra Média dos clientes'>
                    <CardValue value={`R$${overView?.avaragePurchase.toFixed(2).replace('.', ',')  ?? 'N/A'}`}/>
                </Card>
                <Card title='Melhor cliente'>
                    <CardValue value={`${overView?.bestClient ?? 'N/A'}`}/>
                </Card>
                <Card title={`Maior compra de ${overView?.bestClient ?? 'melhor cliente'}`}>
                    <CardValue value={`R$${overView?.greaterPurhase.toFixed(2).replace('.', ',') ?? 'N/A'}`}/>
                </Card>
            </div>
            <div className={styles.pageAnalysis}>
                <Card title="Lista de clientes">
                    <>
                        <div className={styles.singleCardFilter}>
                            <select name="filter" id="field">
                                <option value="">Sem filtro</option>
                                <option selected value="">Compras</option>
                                <option value="">Em estoque</option>
                                <option value="">Status</option>
                                <option value="">Info</option>
                            </select>
                            <select name="filter" id="value">
                                <option  defaultValue={'Todos'} value="Todos">Todos</option>
                                <option  value="Maior que">maior que </option>
                                <option value="Menor que">menor que </option>
                            </select>
                            <input className={styles.filter} type="number" />
                        </div>
                        <div className={styles.cardTable}>
                            <TableHeader headers={headers}/>
                            <TableBody info={info}/>
                        </div>
                    </> 
                </Card>
            </div>
        </section>
    </>
  );
};

export default Clients;
