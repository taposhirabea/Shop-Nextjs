import { useCartContext } from "@/context/cartContext"
import CartContent from '../components/Cart/CartContent'
import Link from "next/link"

const cartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <article className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link href='/products' className='btn'>
            fill it
          </Link>
        </div>
      </article>
    )
  }
  return (
    <main>
      {/* <PageHero title='cart' /> */}
      <article className='page'>
        <CartContent/>
      </article>
      {/* <h1>ccart</h1> */}
    </main>
  )
}


export default cartPage