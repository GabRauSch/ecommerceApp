import { useEffect, useState } from 'react'
import styles from '../../styles/Layout/admin/aside.module.css'
import { useLocation } from 'react-router-dom';

const AdminAside = ()=>{
    const location = useLocation();
    const [finalPath, setFinalPath] = useState('');
    useEffect(()=>{
        setFinalPath(location.pathname.split('/')[2])
    }, [])
    return (
        <aside id={styles.aside}>
            <header>
                <div className={styles.logoArea}>
                    <img src="/assets/kharitaslogo.png" alt="" />
                </div>
                <div className={styles.companyName}>Kharitas</div>
            </header>
            <nav>
                <ul>
                    <li className={finalPath == undefined ? styles.active : ''}  ><img src="/assets/general.svg" alt=""/> Geral</li>
                    <li className={finalPath == 'sales' ? styles.active : ''}  ><img src="/assets/sale.svg" alt="" /> Vendas</li>
                    <li className={finalPath == 'clients' ? styles.active : ''}  ><img src="/assets/customer.svg" alt="" /> Clientes</li>
                    <li className={finalPath == 'products' ? styles.active : ''}  ><img src="/assets/product.svg" alt="" /> Produtos</li>
                    <li className={finalPath == 'warehouse' ? styles.active : ''}  ><img src="/assets/warehouse.svg" alt="" /> Estoque</li>
                    <li className={finalPath == 'config' ? styles.active : ''}  ><img src="/assets/settings.svg" alt="" /> Configurações</li>
                </ul>
            </nav>
        </aside>
    )
}

export default AdminAside