import Image from 'next/image';
import Link from 'next/link';
import styles from './product.module.css'

export default function ProductItem(props) {
  
  const { name, image, id, price} = props
  
  return (
    <article>
      
      <div className={styles.container}>
        <Image className={styles.img} src={image} alt={name} width={100} height={160} />
         
      </div>
      <div className={styles.linkBtn}>
        <Link href={`/products/${id}`} className={styles.link}>
          {/* <FaSearch /> */}
          view more 
        </Link>
      </div>
      <footer className={styles.footer}>
        <h5>{name}</h5>
        <p>${price}</p>
      </footer>
    </article>
  )
}
