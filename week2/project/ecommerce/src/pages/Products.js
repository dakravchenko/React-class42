import React, {useState} from 'react'
import Category from '../components/Category.js';
import Product from '../components/Product.js'

export default function Products() {
    const [categoryId, setCategoryId] = useState(null)

    function selectCategory(e){
      const categoryId = e.target.id
      setCategoryId(categoryId);
    }
    return (
      <div className="App">
        <h1>Products</h1>
        <Category selectCategory={selectCategory} categoryId={categoryId} setCategoryId={setCategoryId}/>
        <Product selectedCategoryId={categoryId}/>
      </div>
    );
  }
  