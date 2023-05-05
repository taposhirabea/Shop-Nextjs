import React, {useState, useEffect} from 'react'
import { useFilterContext } from '../context/filter_context'
import { getAllEvents } from '@/utils/api-util';

const Filters = ({items}) => {
  // const {items} = props;
  const {
    filters: {
      price,
      category,
    },
    sorted,
    setSorted,
    updateFilters,
    clearFilters,setFilters
  } = useFilterContext()

// const handleCategory = (e) =>{
//   let type = e.target.type;
//   let name = e.target.name;
//   let value = e.target.value;
  
//   let newProducts = items.sort((a, b) => a.price - b.price);
//     //const {category, price} = filters
//     if (category !== "all") {
//       newProducts = newProducts.filter(item => item.category === category);
//     }
//     console.log(category)
//     setFilters({ name, value, newProducts });
// }
  return (
    <article>
      <div className='content'>
        <form >
          {/* search input */}
          <div className='form-control'>
            <input
              type='text'
              name='search'
              id='search'
              //value={search}
              placeholder='search'
              onChange={ updateFilters}
              className='search-input'
            />
          </div>
          {/* end of search input */}

{/* select category */}
<div className="form-control">

            <label htmlFor="category">category</label>
            <select name="category" id="category" 
             value={category}
             onChange={updateFilters}
             className='active'
            >
                <option value="all">All</option>
                <option value="food">Food</option>
                <option value="animal">Animal</option>
                <option value="clothe">Clothe</option>
            </select>
        </div>
          {/* price */}
          <div className='form-control'>
            <h5>price</h5>
            <label><input type="radio" name="price" value="all" 
                    checked={price === "all"} onChange={updateFilters}/>all</label>
                    <label><input type="radio" name="price" value="0" 
                    checked={price === 0} onChange={updateFilters}/>$0 - $300</label>
                    <label><input type="radio" name="price" value="300" 
                    checked={price === 300} onChange={updateFilters}/>$300 - $650</label>
                    <label><input type="radio" name="price" value="650" 
                    checked={price === 650} onChange={updateFilters}/>Over $650</label>
          </div>
          {/* end of price */}
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </div>
      <h6>total products :{sorted.flat().length} </h6>
    </article>
  )
}


export default Filters