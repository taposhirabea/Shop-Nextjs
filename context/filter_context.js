import React, { useEffect, useContext, useState } from 'react'
import useSWR from 'swr';
import reducer from '../Reducer/filter_reducer'
import { getAllEvents } from '@/utils/api-util'

const initialState = {
  filtered_products: [],
  // all_products: [],
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
   const [genre, setGenre] = useState("");
  const [filters, setFilters] = React.useState({
    category: "all",
    price: "all",
    all_products: [],
  });
  const { data } = useSWR(
    'https://redux-b78d9-default-rtdb.firebaseio.com/events.json',
    (url) => fetch(url).then(res => res.json())
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setSorted(events);
      setFilters(events)
    }
  }, [data]);

// useEffect(() => {
  
// let newProducts = getAllEvents.sort((a, b) => a.price - b.price);

//     const {category, price} = filters
//     if (category !== "all") {
//       newProducts = newProducts.filter(item => item.category === category);
//     }
//     if (price !== "all") {
//       newProducts = newProducts.filter(item => {
//         if (price === 0) {
//           return item.price < 300;
//         } else if (price === 300) {
//           return item.price > 300 && item.price < 650;
//         } else {
//           return item.price > 650;
//         }
        
//       });
//     }
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
        setFilters
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
