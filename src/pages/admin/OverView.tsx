import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import styles from '../styles/admin/Admin.module.css'
import Card from '../../components/Element/Card';
import CardValue from '../../components/Element/CardValue';
import { OverView as OverViewType } from '../../types/Purchase';
import TableHeader from '../../components/table/TableHeader';
import TableBody from '../../components/table/TableBody';
import { findClientsAnalyticInfo, findOverViewInfo, findProductAnalyticInfo } from '../../api/Admin';
import { AnalyticInfo } from '../../types/Admin';
import { sortData } from '../../utils/dataTransformation';
import Standard from '../../components/Button/Standard';
const OverView = () => {
    const [headers, setHeaders] = useState<string[]>([]);
    const [selected, setSelected] = useState('qt')
    const [info, setInfo] = useState<AnalyticInfo[]>([]);
    const [overView, setOverView] = useState<OverViewType>();
    const [yearFilter, setYearFilter] = useState(`${new Date().getUTCFullYear()}`);
    const [monthFilter, setMonthFilter] = useState(`${new Date().getUTCMonth()}`);

    const setOverViewInfo = async ()=>{
        let date = `${yearFilter}-${monthFilter}-01`;
        if(yearFilter == 'fullPeriod' || monthFilter == 'fullPeriod'){
            date = 'fullPeriod';
        }
        console.log(yearFilter, monthFilter)
        const data = await findOverViewInfo(1, date);
        if(data.status !== 200) return;
        console.log(data.data)
        
        setOverView(data.data);
    }
    const setInfoPop = async (analyse: 'evaluation' | 'qt')=>{
        setSelected(analyse)
        setHeaders(['Produto', 'Nota', 'Disconto', 'Vendas', 'Total Vendas']);

        const data = await findProductAnalyticInfo(1);
        if(data.status !== 200) return

        const column = analyse == 'evaluation' ? 1 : 4
        const sortedData = sortData(data.data, column)

        setInfo(sortedData);
        console.log(data.data)
    }
    const setClients = async ()=>{
        setSelected('clients');
        setHeaders(['Cliente', 'Compras Totais', 'Valor de compras']);

        const data = await findClientsAnalyticInfo(1);
        if(data.status !== 200) return

        const sortedData = sortData(data.data, 2)

        setInfo(data.data)
    }

    useEffect(()=>{
        setOverViewInfo()
        setInfoPop('qt')
        
    }, [])

  return (
    <>
        <section className={styles.page} id={styles.overView}>
            <div className={styles.pageTitle}>Geral</div>
            <div className={styles.pageCards}>
                <Card title='Compras'>
                    <CardValue value={`${overView?.purchasesCount ?? 'N/A'}`}/>
                </Card>
                <Card title='Valor total'>
                    <CardValue value={`R$${overView?.totalValue.toFixed(2).replace('.', ',')  ?? 'N/A'}`}/>
                </Card>
                <Card title='Clientes totais'>
                    <CardValue value={`${overView?.totalClients ?? 'N/A'}`}/>
                </Card>
                <Card title='Clientes novos'>
                    <CardValue value={`${overView?.newClients ?? 'N/A'}`}/>
                </Card>
                <Card title='Aumento período passado'>
                    <CardValue value={`${overView?.pastPeriod ?? 'N/A'}`}/>
                </Card>
            </div>
            <div className={styles.pageAnalysis}>
                <Card title="Produtos populares">
                    <div className={styles.cardTable}>
                        <TableHeader headers={headers}/>
                        <TableBody info={info as AnalyticInfo[]}/>
                    </div>
                </Card>
                <Card title="Filtros">
                    <div className={styles.cardFilters}>
                        <div className={styles.cardArea}>
                            <Card title="Mês">
                                <div className={styles.cardFilter}>
                                    <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setMonthFilter(e.target.value) }}>
                                        <option value="fullPeriod">Todos</option>
                                        <option value={0}>Janeiro</option>
                                        <option value={1}>Fevereiro</option>
                                        <option value={2}>Março</option>
                                        <option value={3}>Abril</option>
                                        <option value={4}>Maio</option>
                                        <option value={5}>Junho</option>
                                        <option value={6}>Julho</option>
                                        <option value={7}>Agosto</option>
                                        <option value={8}>Setembro</option>
                                        <option value={9}>Outubro</option>
                                        <option value={10}>Novembro</option>
                                        <option value={11}>Dezembro</option>
                                    </select>
                                </div>
                            </Card>
                            {monthFilter !== 'fullPeriod' &&
                                <Card title="Ano">
                                    <div className={styles.cardFilter}>
                                        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setYearFilter(e.target.value) }}>
                                            <option value={2024}>2024</option>
                                        </select>
                                    </div>
                                </Card>
                            }
                            {/* <Card title="Filial">
                                <div className={styles.cardFilter}>
                                    <select>
                                        <option>Todas</option>
                                        <option>Pinheira</option>
                                    </select>
                                </div>
                            </Card> */}
                            <div className={styles.applyButton} onClick={setOverViewInfo}>
                                <Standard text='Aplicar' />
                            </div>
                        </div>
                        <div className={styles.cardArea}>
                            <Card title="Análise">
                                <>
                                    <div onClick={()=>{setInfoPop('qt')}} className={[styles.cardSelection, selected == 'qt' ? styles.selected : ''].join(' ')}>
                                        Produtos populares
                                    </div>
                                    <div onClick={()=>{setInfoPop('evaluation')}} className={[styles.cardSelection, selected == 'evaluation' ? styles.selected : ''].join(' ')}>
                                        Produtos mais bem avaliados
                                    </div>
                                    <div onClick={setClients} className={[styles.cardSelection, selected == 'clients' ? styles.selected : ''].join(' ')}>
                                        Melhores clientes
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
