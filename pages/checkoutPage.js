
import StripeCheckout from '@/components/StripeCheckout'
import { useAuth } from '@/context/AuthContext'
import { useCartContext } from '@/context/cartContext'
import Link from 'next/link'
import React from 'react'


const checkoutPage = () => {
  const { cart } = useCartContext()

  return (
    <article className='checkout-section'>
        
      {/* <PageHero title='checkout' /> */}
      <div className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link href='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout/>
        )}
      </div>
    </article>
  )
}

export default checkoutPage