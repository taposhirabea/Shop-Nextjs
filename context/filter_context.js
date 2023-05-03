import React, { useEffect, useContext, useState } from 'react'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import reducer from '../Reducer/filter_reducer'
import { getAllEvents } from '@/utils/api-util'

const initialState = {
  filtered_products: [],
  all_products: [],
  // sort: 'price-lowest',
  // filters: {
  //   // text: '',
  //   min_price: 0,
  //   max_price: 0,
  //   price: 0,
  // },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  //const [state, dispatch] = useReducer(reducer, initialState)
   const [state, dispatch] = useState( initialState)
   const [sorted, setSorted] = React.useState([]);
  const [filters, setFilters] = React.useState({
    category: "all",
    price: "all",
  });

  // useEffect(() => {

  //   let maxPrice = products.map((p) => p.price)
  //  maxPrice = Math.max(...maxPrice)
  //   return {
  //     ...state,
  //     all_products: [...products],
  //     filtered_products: [...products],
  //     filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
  //   }
  // })
//   useEffect(() => {
// filterProducts()
//   }, [filters])

  const updateFilters = e => {
    let type = e.target.type;
    let name = e.target.name;
    let value = e.target.value;

    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    setFilters({ ...filters, [name]: filterValue });
    setSearch(value)
  };
  const clearFilters = () => {
    // dispatch({ type: CLEAR_FILTERS })
    const value = filters.price
    setSearch('')
    console.log(value)
    return {price: value}
  }
  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters,
        //handleChange,
        search,
        filters,
        sorted, setSorted,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
