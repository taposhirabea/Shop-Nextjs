import '@/styles/globals.css'
import Navbar from '@/components/Nav/Navbar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Nav/Sidebar'
import { SidebarProvider } from '@/context/sidebar_context'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
// import "../css/customcss.css";
import Head from "next/head";
import Script from "next/script";
import AuthContextProvider from '../context/AuthContext'
import { CartProvider } from '@/context/cartContext'
import { FilterProvider } from '@/context/filter_context'
import { ProductsProvider } from '@/context/products_context'

export default function App({ Component, pageProps }) {
  return (
  <><Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />

</Head>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></Script>
    
    {/* <AuthProvider> </AuthProvider> */}
  <AuthContextProvider>
    {/* <ProductsProvider ></ProductsProvider>*/}

    
<FilterProvider>
<CartProvider>
    <SidebarProvider>
    <Navbar/>
    <Sidebar/>
    <Component {...pageProps} />
    <Footer/>
  </SidebarProvider>
    </CartProvider>
    </FilterProvider> 

  </AuthContextProvider>
    

  </>
  )
}
