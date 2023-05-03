
import { useCartContext } from '@/context/cartContext'
import CartColumns from './CartColumns'
import Link from 'next/link'
 import CartItem from './CartItem'
 import styles from './cart.module.css'
import CartTotals from './CartTotals'

const CartItems = () => {
  const { cart, clearCart, total } = useCartContext()

  return (
    <article className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className={styles.linkContainer}>
        <Link href='/products' className={styles.linkBtn}>
          continue shopping
        </Link>
        
        <button
          type='button'
          className={styles.linkBtn}
          style={{background: "var(--clr-primary-11)"}}
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals/>
    </article>
  )
}

export default CartItems