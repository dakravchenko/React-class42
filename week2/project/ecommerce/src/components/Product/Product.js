import { useEffect, useState } from 'react';
import ProductsItem from '../Product/ProductsItem.js';
import { Link } from 'react-router-dom';
import '../Product/Product.css'

export default function Products({ selectedCategory }){
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      if (selectedCategory === 'all categories') {
        try {
          const res = await fetch('https://fakestoreapi.com/products');
          const productsAll = await res.json();
          setProductsList(productsAll);
        } catch (e) {
          alert('Error: ' + e.message);
        }
      } else {
        try {
          const res = await fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}`
          );
          const productsByCategory = await res.json();
          setProductsList(productsByCategory);
          console.log(productsByCategory)
        } catch (e) {
          alert('Error: ' + e.message);
        }
      }
      setIsLoading(false);
    };
    getCategories();
  }, [selectedCategory]);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='products-container'>
          {productsList.map(product => {
            return (
              <div key={product.id} className='products-item'>
              <Link
                className='product'
                to={`/product/${product.id}`}
              >
                <ProductsItem product={product} />
              </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};