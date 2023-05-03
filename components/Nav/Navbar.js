import Image from "next/image";
import Link from "next/link";

import { FaBars } from 'react-icons/fa'
import { useSidebarContext } from "@/context/sidebar_context";
import CartButtons from "../CartButtons";
// import { links } from '../utils/navbarData'
import styled from './Nav.module.css'
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { openSidebar  } = useSidebarContext()
  const {user} = useAuth()
  const links = [
    {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  ]

  return (
    <section className={styled.navSection}>
      <div className={styled.navCenter}>
        <div className={styled.navHeader}>
          <Link href='/' className={styled.logo}>
            <Image className={styled.img} src='/pic_2.png' width='300'height='300' alt="" />
          </Link>
          
          <button type='button' className={styled.navToggle} onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className={styled.navLinks}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/products'>Product</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          {user && (
            <li>
              <Link href='/checkoutPage'>checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons/>
      </div>
    </section>
  )
}

