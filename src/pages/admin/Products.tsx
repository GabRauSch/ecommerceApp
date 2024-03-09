import React, { ReactNode, useEffect, useState } from 'react';
import styles from '../styles/admin/Admin.module.css'
import Card from '../../components/Element/Card';
import Standard from '../../components/Button/Standard';
import { findAllProductInfo } from '../../api/Admin';
import TableHeader from '../../components/table/TableHeader';
import TableBody from '../../components/table/TableBody';
const Products = () => {
    const [headers, setHeaders] = useState<string[]>([]);
    const [info, setInfo] = useState<any[]>([]);

    const setInfoProducts = async ()=>{
        setHeaders(['Imagens', 'Produto', 'Preço', 'Desconto', 'Preço final', 'Quantidade em estoque', 'Vendas', 'Categoria'])
        const data = await findAllProductInfo(1);
        if(data.status !== 200) return;
        console.log(data.data)
        
        setInfo(data.data)        
    }
    useEffect(()=>{
        setInfoProducts()
    }, [])

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
                            <TableHeader headers={headers}/>
                            <TableBody info={info}/>
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
