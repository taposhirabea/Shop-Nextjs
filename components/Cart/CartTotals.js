
import { Link } from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useCartContext } from '@/context/cartContext'
import { useRouter } from 'next/router'
import styles from './cart.module.css'

export default function CartTotals() {
  const { total, shipping_fee } = useCartContext()
  const { user } = useAuth()
  
  const router = useRouter()

  const handleButton = () => {
    router.push('/checkoutPage')
  }
  const handleLogin = () => {
    router.push('/auth/signin')
  }

  return (
    <article className={styles.cartTotalSection}>
      <div>
        <section className={styles.article}>
          <h5>
            subtotal :<span>$ {total}</span>
          </h5>
          <span>
            shipping fee :<span>$ {shipping_fee}</span>
          </span>
          <hr />
          <h5>
            order total :<span>$ {total + shipping_fee}</span>
          </h5>
        </section>
        {user ? (
          
              // <Link href='/'>checkout</Link>
              // <div>hhhhhhhh</div>
              <button onClick={handleButton} className={styles.btn}>checkout</button>
          ): (
          // <Link href='/auth/signin' className={styles.btn}>
          //   login
          // </Link>
          <button onClick={handleLogin} className={styles.btn}>login</button>
        )}
        {/* {user && (
          <Link href='/checkoutPage' className={styles.btn}>
            proceed to checkout
          </Link>
        )
        } : (
          <Link href='/auth/signin' className={styles.btn}>
            login
          </Link>
        )} */}
        
      </div>
      
    </article>
  )
}