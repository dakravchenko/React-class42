import React, {useState} from 'react'
import categories from "./fake-data/all-categories.js";

export default function Category({selectCategory, categoryId}) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  return (
    <div className='category-container'>
    {categories.map((category, index) => {
      return <div 
      id={index} 
      className={
        selectedCategoryIndex === index
        ?'category-btn selected'
        :'category-btn'
      }
      onClick={e => {
        setSelectedCategoryIndex(index)
        selectCategory(e)
      }} 
      key={index}>
        {category}
      </div>
    })}
    </div>
  )
}
