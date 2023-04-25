import React from 'react'
import categories from "./fake-data/all-categories.js";

export default function Category({selectCategory, categoryId}) {
  return (
    <div className='category-container'>
    {categories.map((category, index) => {
      return <div 
      id={index} 
      className={
        categoryId === index
        ?'category-btn selected'
        :'category-btn'
      }
      onClick={e => {
        selectCategory(e)
      }} 
      key={index}>
        {category}
      </div>
    })}
    </div>
  )
}
