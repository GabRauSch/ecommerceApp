import { backendIP, backendPort } from '../../api/Config'
import styles from '../../pages/styles/admin/Admin.module.css'
import { AnalyticInfo } from '../../types/Admin'

type Props = {
    info: AnalyticInfo[]
}

const TableBody = ({info}: Props)=>{
    return (
        <div className={styles.tableInfo}>
            {info.map((el)=>(
                <div className={styles.tableBody} id={el.id.toString()}>
                    {el.info.map((infoel: string)=>{
                        if (typeof infoel == 'string' && infoel.search(/\.(png|jpg|jpeg)$/) !== -1) {
                            return (
                                <div className={[styles.tableBodyItem].join(' ')}>
                                    <div className={styles.cardImage}>
                                        <img src={`http://localhost:${backendPort}/images/${infoel}`} alt="" />
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div className={[styles.tableBodyItem, infoel == 'Pendente de entrega' ? styles.pending : infoel == 'Com erro' ? styles.error : infoel == 'Entregue' ? styles.success : null].join(' ')}>{infoel}</div>
                        )
                    })}
                
                </div>
            ))}
        </div>
    )
}

export default TableBody