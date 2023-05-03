
import React, { useEffect} from 'react'
import { FaUserMinus, FaUserPlus, FaShoppingCart } from 'react-icons/fa'
import { useRouter } from 'next/router';
import { useAuth } from "../context/AuthContext";
import Link from 'next/link';
import { useSidebarContext } from '@/context/sidebar_context';
import { useCartContext } from '@/context/cartContext';

const CartButton = () => {
  // const {values, logout} = useAuthContext()
  const {closeSidebar} = useSidebarContext()
  const {cartItems} = useCartContext()
    const { user, logout } = useAuth();
  const router = useRouter();

  return ( 
    <section className='cart-button-section'>
      <Link href='/cartPage' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{cartItems}</span>
        </span>
      </Link>
        {/* <Link href='/auth/login' className='auth-btn'>
          Login <FaUserPlus />
        </Link> */}
       
          {/* <button onClick={clickLogin}>
          {values.isMember ? "Log Out" : "Login"}
        </button> */}

      {user ? (
        <span className='auth-btn' style={{ cursor: 'pointer'}} onClick={() => {
              logout(), router.push("/");}}>
          Logout <FaUserMinus/>
        </span>
        // <a
        //     className="auth-btn"
        //     onClick={() => {
        //       logout(), router.push("/login");
        //     }}
        //   >
        //     Logout
        //   </a>
      ) : (
        <Link href='/auth/signin' className='auth-btn'>
          Login <FaUserPlus />
        </Link> 
        // <div className="flex items-center space-x-4">
        //     <Link href="/auth/signin"  className="auth-btn">
        //      Login
        //     </Link>{" "}
        //     <Link href="/auth/signup"  className="auth-btn">
        //       Signup
        //     </Link>
        //   </div>
      )}

    </section>
  )
}

export default CartButton