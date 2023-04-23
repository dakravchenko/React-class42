import React from 'react'
import categories from "./fake-data/all-categories.js";

export default function Category({selectCategory}) {
  return (
    <div>
    {categories.map((category, index) => {
      return <button onClick={selectCategory} id={index} class='category-btn' key={index}>{category}</button>
    })}
    </div>
  )
}
