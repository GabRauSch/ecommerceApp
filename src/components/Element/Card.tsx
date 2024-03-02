import { ReactElement } from 'react'
import styles from '../styles/Element/card.module.css'

type Props = {
    title: string,
    color?: string,
    children: ReactElement
}

const Card = ({title, color, children}: Props)=>{
    return (
        <div className={styles.card} style={{color: color}}>
            <div className={styles.cardTitle} style={{color: color}}>{title}</div>
            {children}
        </div>
    )
}

export default Card