import { ReactElement } from 'react'
import styles from '../styles/Element/card.module.css'

type Props = {
    value: string,
}

const CardValue = ({value}: Props)=>{
    return (
        <div className={styles.cardValue}>{value}</div>
    )
}

export default CardValue