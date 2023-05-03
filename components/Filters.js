import React, {useState, useEffect} from 'react'
import { useFilterContext } from '../context/filter_context'

const Filters = (props) => {
  const {items} = props;
  const {
    filters: {
      price,
      category,
    },
    sorted,
    setSorted,
    updateFilters,
    clearFilters,
  } = useFilterContext()

  React.useLayoutEffect(() => {
    let newProducts = items.sort((a, b) => a.price - b.price);
    //const {  price } = filters;
    if (category !== "all") {
      newProducts = newProducts.filter(item => item.category === category);
    }
    if (price !== "all") {
      newProducts = newProducts.filter(item => {
        if (price === 0) {
          return item.price < 300;
        } else if (price === 300) {
          return item.price > 300 && item.price < 650;
        } else {
          return item.price > 650;
        }
        
      });
    }
    setSorted(newProducts);
  }, [items])

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
            {/* <p className='price'>${price}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            /> */}
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