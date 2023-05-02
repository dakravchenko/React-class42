import React, {useState, useEffect} from 'react'
import '../components/Category.css'


export default function Category({selectCategory}) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => {
      try 
      {const res = await fetch("https://fakestoreapi.com/products/categories");
      const jsonData = await res.json();
      setCategories(jsonData);
    } catch (e) {
      alert('Error: ' + e.message);
    }
    })();
  }, []);


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
        if(e.target.className === 'category-btn selected'){
          setSelectedCategoryIndex(null)
        }
      }} 
      key={index}>
        {category}
      </div>
    })}
    </div>
  )
}
