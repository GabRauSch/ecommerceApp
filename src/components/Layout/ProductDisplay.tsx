import React, { useState } from 'react';
import Product from '../Element/Product';
import styles from '../styles/Layout/ProductDisplay.module.css'
import { Product as ProductType } from '../../types/Product';
import { retrieveRelatedProduct } from '../../api/Product';

type Props = {
  categoryId: number,
  alreadyRetrieved: number
}

const ProductDisplay = ({categoryId,alreadyRetrieved}:Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchRelated = async ()=>{
    const response = await retrieveRelatedProduct(categoryId, alreadyRetrieved)
    if(response.status !== 200) return
    console.log(response.data)
    setProducts(response.data)
  }
  fetchRelated()
  return (
    <section className="container" id={styles.mostViewed}>
        {products.map((el)=>(
          <Product image={el.image} title={el.name} 
          discountPrice={el.discountPrice.toFixed(2).replace('.', ',')} originalPrice={el.originalPrice.toFixed(2).replace('.', ',')}/>
        ))
        }
        
    </section>
  );
};

export default ProductDisplay;
