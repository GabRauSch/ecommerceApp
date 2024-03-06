import React, { ReactNode } from 'react';
import styles from '../styles/admin/Admin.module.css'
import Card from '../../components/Element/Card';
import CardValue from '../../components/Element/CardValue';

const Config = () => {
  return (
    <section  className={styles.page} id={styles.sales}>
        <div className={styles.pageTitle}>Configurações</div>
        <div className={styles.pageAnalysis}>
            <Card title="Perfil da loja">
                <>
                    <div className={styles.cardImageArea}>
                        <div className={styles.profileImage}>
                            <img src="/assets/kharitaslogo.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.profileName}>Kharitas</div>
                    <Card title="">
                        <>
                            <div className={styles.cardInfo}>Email suporte</div>
                            <input type="text" className={styles.filter}/>
                            <div className={styles.cardInfo}>Telefone suporte</div>
                            <input type="text" className={styles.filter}/>
                        </>
                    </Card>
                </>
            </Card>
            <div className={styles.cardStaff}>
                <Card title="Funcionários">
                    <div className={styles.cardTable}>
                        <div className={styles.tableHeader}>
                            <div className={styles.tableHeaderItem}>Nome</div>
                            <div className={styles.tableHeaderItem}>Email</div>
                            <div className={styles.tableHeaderItem}>Cargo</div>
                            <div className={styles.tableHeaderItem}>Acesso</div>
                            <div className={styles.tableHeaderItem}>Filial</div>

                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.tableBodyItem}>Fábio dos Santos</div>
                            <div className={styles.tableBodyItem}>fabiofabiofabio@gmail.com</div>
                            <div className={styles.tableBodyItem}>Dono</div>
                            <div className={styles.tableBodyItem}>admin</div>
                            <div className={styles.tableBodyItem}>Pinheira</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.tableBodyItem}>Arthur dos Santos</div>
                            <div className={styles.tableBodyItem}>Arthur@gmail.com</div>
                            <div className={styles.tableBodyItem}>Logista</div>
                            <div className={styles.tableBodyItem}>admin - local</div>
                            <div className={styles.tableBodyItem}>Pinheira</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.tableBodyItem}>Rafael Freitas</div>
                            <div className={styles.tableBodyItem}>rafafrei'@gmail.com</div>
                            <div className={styles.tableBodyItem}>Logista</div>
                            <div className={styles.tableBodyItem}>staff</div>
                            <div className={styles.tableBodyItem}>Pinheira</div>
                        </div>
                    </div>
                </Card>
                <Card title="Filiais">
                    <div className={styles.cardTable}>
                        <div className={styles.tableHeader}>
                            <div className={styles.tableHeaderItem}>Nome</div>
                            <div className={styles.tableHeaderItem}>Local</div>
                            <div className={styles.tableHeaderItem}>Tipo</div>
                            <div className={styles.tableHeaderItem}>Email</div>
                            <div className={styles.tableHeaderItem}>Telefone</div>
                            <div className={styles.tableHeaderItem}>Responsável</div>
                        </div>
                        <div className={styles.tableBody}>
                            <div className={styles.tableBodyItem}>Matriz Kharitas</div>
                            <div className={styles.tableBodyItem}>Pinheira</div>
                            <div className={styles.tableBodyItem}>Matriz</div>
                            <div className={styles.tableBodyItem}>khartias@gmail.com</div>
                            <div className={styles.tableBodyItem}>+55 48 9 8411-6469</div>
                            <div className={styles.tableBodyItem}>Fabio dos Santos</div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </section> 
  );
};

export default Config;
