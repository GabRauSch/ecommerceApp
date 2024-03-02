import React, { ReactNode } from 'react';
import styles from '../styles/admin/Admin.module.css'
import AdminAside from '../../components/Layout/admin/AdminAside';
import OverView from './OverView';
import Sales from './Sales';
import { Route, Routes } from 'react-router-dom';
import Clients from './Clients';
import Products from './Products';
import WareHouse from './WareHouse';
import Config from './Config';

const Admin = () => {
  return (
    <>
        <div className={styles.main}>
            <AdminAside />
            <Routes>
                <Route path="/" element={<OverView />}></Route>
                <Route path="/sales" element={<Sales />}></Route>
                <Route path="/clients" element={<Clients />}></Route>    
                <Route path="/products" element={<Products />}> </Route>    
                <Route path="/warehouse" element={<WareHouse />}></Route>    
                <Route path="/config" element={<Config/>}></Route> 
            </Routes>
        </div>
    </>
  );
};

export default Admin;
