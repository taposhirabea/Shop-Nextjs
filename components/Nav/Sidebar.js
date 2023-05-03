import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Link from "next/link";
import Image from "next/image";
import styled from './Nav.module.css'

import { useSidebarContext } from '@/context/sidebar_context'

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebarContext()
  return (
    <section className={styled.sidebarSection}>
      {/* <aside className={`${isSidebarOpen ? 'styled.sidebar show-sidebar' : 'styled.sidebar'}`}> */}
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className={styled.sidebarHeader}>
          <Link href='/' className={styled.logo}>
            <Image className={styled.img} src='/pic_2.png' width='300'height='300' alt=''/>
            
          </Link>
          <button type='button' className={styled.closeBtn} onClick={closeSidebar}>
            <FaTimes/>
          </button>
        </div>

        <ul className={styled.links} onClick={closeSidebar}>
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
          {/* {links.map((link) => {
            const {id, text, url} = link
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })} */}
        </ul>
        {/* <CartButtons/> */}
      </aside>
    </section>
  )
}

