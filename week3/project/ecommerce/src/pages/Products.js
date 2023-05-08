import React, {useState} from 'react'
import Category from '../components/Category/Category.js'
import Product from '../components/Product/Product.js'

export default function Products() {
    const [category, setCategory] = useState('all categories')

    function selectCategory(e){
      const category = e.target.textContent //now I grab a text content instead of id
      setCategory(category);
      if(e.target.className === 'category-btn selected'){
        setCategory('all categories')
      }

    }
    return (
      <div className="App">
        <h1>Products</h1>
        <Category selectCategory={selectCategory} />
        <Product selectedCategory={category}/>
      </div>
    );
  }
  