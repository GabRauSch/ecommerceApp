import styles from '../../pages/styles/admin/Admin.module.css'

type Props = {
    headers: string[]
}

const TableHeader = ({headers}: Props)=>{
    return (
        <div className={styles.tableHeader}>
            {headers.map((el)=>(
                <div className={styles.tableHeaderItem}>{el}</div>
            ))}
            
        </div>
    )
}

export default TableHeader