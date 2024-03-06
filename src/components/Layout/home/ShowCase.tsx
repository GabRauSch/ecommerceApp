import React, { useEffect, useState } from 'react';
import Slider from '../../Element/Slider';
import Popular from '../../Element/Popular';
import styles from '../../styles/Layout/home/ShowCase.module.css'
import { retrieveParentCategoriesFromStore } from '../../../api/Category';
import { retrievePopularProducts } from '../../../api/Product';
import { ProductSimple } from '../../../types/Product';

const ShowCase = () => {
  const [categories, setCategories] = useState<string[]>(['']);
  const [popularItems, setPops] = useState<ProductSimple[]>([])

    useEffect(()=>{
        const fetchCategories = async ()=>{
            const response = await retrieveParentCategoriesFromStore(1)
            if(response.status !== 200){
                return
            }
            setCategories(response.data);
        }
        fetchCategories();
        const fetchPops = async ()=>{
            const response = await retrievePopularProducts(1, 109);
            if(response.status !== 200){
                return 
            }
            setPops(response.data)
        }
        fetchPops()

    }, [])

  return (
    <section className="container" id={styles.showcase}>
        <aside className={styles.leftAside}>
            <div className={styles.asideTitle}>Categorias</div>
            <div className={styles.categoriesList}>
                {categories.map((category, key)=>(
                    <div key={key} className={styles.category}>{category}</div>
                ))}
                <div className={styles.moreCategories}>
                    <div className={styles.categoryText}>Mais</div>
                    <div className={styles.moreCategoriesIcon}>›</div>
                </div>
            </div>
        </aside>
        <div className={styles.banner}>
            <Slider />
        </div>
        <aside className={styles.rightAside}>
            <div className={styles.asideTitleBackground}>Populares</div>
            {popularItems.map((el, key)=>(
                <Popular key={key} name={el.name} image={el.image}/>
            ))}
        </aside>
    </section>
  );
};

export default ShowCase;
