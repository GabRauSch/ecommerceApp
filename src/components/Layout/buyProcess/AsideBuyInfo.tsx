import styles from '../../styles/Layout/buyProcess/AsideBuyInfo.module.css'

const AsideBuyInfo = ()=>{
    return (
        <aside className={styles.buyInfo}>
            <div className="buyInfoTitle">Resumo da compra</div>
            <div className={styles.productDisplayArea}>
                <div className={styles.productItemNum}>produto 1 de 3</div>
                <div className={[styles.buyInfoItem, styles.buyInfoImage].join(' ')}>
                    <div className={styles.buyInfoProductDisplay}>
                        <div className={styles.buyInfoProduct}>
                            <img src="/assets/camiseta-verde.png" alt="camiseta-verde" />
                        </div>
                        <div className={styles.buyInfoName}>Camiseta verde daora</div>
                    </div>
                    <div className={styles.buyNextImage}>›</div>
                </div>
            </div>
            <div className={styles.buyItemsList}>
                <div className={styles.buyInfoItem}>
                    <div className={styles.buyItemName}>Camiseta verde daora</div>
                    <div className={styles.buyItemPrice}>R$700,00</div>
                </div>
                <div className={styles.buyInfoItem}>
                    <div className={styles.buyItemName}>Boné muito daora</div>
                    <div className={styles.buyItemPrice}>R$700,00</div>
                </div>
                <div className={styles.buyInfoItem}>
                    <div className={styles.buyItemName}>Frete</div>
                    <div className={[styles.buyItemPrice, styles.buyFree].join(' ')}>Grátis</div>
                </div>
            </div>
            <div className={styles.buyInfoItem}>
                <b className={[styles.buyItemPame, styles.finalPrice].join(' ')}>Preço final</b>
                <b className={[styles.buyItemPrice, styles.finalPrice].join(' ')}>R$700,00</b>
            </div>
        </aside>
    )
}

export default AsideBuyInfo;