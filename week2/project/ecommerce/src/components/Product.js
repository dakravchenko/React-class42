import React from 'react'
import products from '../fake-data/all-products'
import ProductsItem  from '../components/ProductsItem'
import '../components/Product.css'

export default function Product({ selectedCategoryId}) {
  return (
    <div className='products-container'>
      {products.map((product) => { 
        let categoryId;
        switch (product.category) {
          case 'electronics':
            categoryId = 0;
            break;
          case 'jewelery':
            categoryId = 1;
            break;
          case "men's clothing":
            categoryId = 2;
            break;
          case "women's clothing":
            categoryId = 3;
            break;
          default:
            categoryId = null;
            break;
        }
        return (
          <div key={product.id} className={`product-item ${categoryId}`}>
            <ProductsItem product={product} />
          </div>
        );
      }).filter((product) => {
        if (selectedCategoryId !== null) {
          return product.props.className.includes(selectedCategoryId);
        }
        return true;
      })}
    </div>
  );
}