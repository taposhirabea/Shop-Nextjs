import axios from 'axios'
import React, { useContext, useEffect, useReducer, useState } from 'react'

// const initialState = {

//   products: [],
// }

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  //const [state, dispatch] = useState()
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('https://redux-b78d9-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
  //console.log(data)
    // const events = [];
  
    // for (const key in data) {
    //   events.push({
    //     id: key,
    //     ...data[key]
    //   });
    // }
  
    //return {data, ...state , products: data, events}; 
    setProducts(data);
    //console.log(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        //...state,
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}