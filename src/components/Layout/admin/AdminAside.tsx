import { useEffect, useState } from 'react'
import styles from '../../styles/Layout/admin/aside.module.css'
import { useLocation, useNavigate } from 'react-router-dom';

const AdminAside = ()=>{
    const location = useLocation();
    const [finalPath, setFinalPath] = useState('');
    const navigate = useNavigate();
    const handleClick  = (path: string)=>{
        navigate(`/admin/${path}`);
        setFinalPath(path)
    }
    useEffect(()=>{
        setFinalPath(location.pathname.split('/')[2])
    }, [])
    return (
        <aside className={styles.aside} id={styles.aside}>
            <header className={styles.header}>
                <div className={styles.logoArea}>
                    <img src="/assets/kharitaslogo.png" alt="" />
                </div>
                <div className={styles.companyName}>Kharitas</div>
            </header>
            <nav className={styles.navigation}>
                <ul>
                    <li onClick={()=>{handleClick('')}} className={finalPath == undefined || finalPath == '' ? styles.active : ''}  ><img src="/assets/general.svg" alt=""/> Geral</li>
                    <li onClick={()=>{handleClick('sales')}} className={finalPath == 'sales' ? styles.active : ''}  ><img src="/assets/sale.svg" alt="" /> Vendas</li>
                    <li onClick={()=>{handleClick('clients')}} className={finalPath == 'clients' ? styles.active : ''}  ><img src="/assets/customer.svg" alt="" /> Clientes</li>
                    <li onClick={()=>{handleClick('products')}} className={finalPath == 'products' ? styles.active : ''}  ><img src="/assets/product.svg" alt="" /> Produtos</li>
                    <li onClick={()=>{handleClick('warehouse')}} className={finalPath == 'warehouse' ? styles.active : ''}  ><img src="/assets/warehouse.svg" alt="" /> Estoque</li>
                    <li onClick={()=>{handleClick('config')}} className={finalPath == 'config' ? styles.active : ''}  ><img src="/assets/settings.svg" alt="" /> Configurações</li>
                </ul>
            </nav>
        </aside>
    )
}

export default AdminAside