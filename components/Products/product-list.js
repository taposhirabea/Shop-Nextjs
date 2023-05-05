import { useFilterContext } from '@/context/filter_context';
import ProductItem from './product-item'
import styles from './product.module.css'
import { useProductsContext } from '@/context/products_context';
import Filters from '../Filters';

export default function ProductList({ items}) {
    //const {items} = props;
    const {search, category} = useFilterContext()
   // const {products} = useProductsContext()
  return (
    <article >
      
      <div className={styles.productsContainer}>
      {items
      .filter((item, category) => {
                return (
                  // search.toLowerCase() === ''
                  // ? item
                  // : item.name.toLowerCase().includes(search), 
                  category === category || category === "all");
      })
      .map(product => {
        return <ProductItem key={product.id} name={product.name}
      id = {product.id}
      image = {product.image}
      price = {product.price}
      description = {product.description}
      category = {product.category} />
      })
      }
        
      </div>
    </article>
  )
}
