import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';

export const Category = () => {
  const { selectedCategory, handleCategoryNameClick } =
    useContext(GlobalContext);

  const [categories, setCategories] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      const categoriesAll = await response.json();
      setCategories(categoriesAll);
    };
    getCategories();
  }, []);

  return (
    <div className='categories'>
      {categories.map(category => (
        <div
          key={category}
          className={
            selectedCategory === category
            ?'category-btn selected'
            :'category-btn'
          }
          onClick={e => {
            handleCategoryNameClick(e);
            if(e.target.className === 'category-btn selected'){
              setSelectedCategoryIndex(null)
            }
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};