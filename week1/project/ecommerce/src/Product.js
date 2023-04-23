import React from 'react'
import products from './fake-data/all-products'

export default function Product() {
    
  return (
    <div className='grid-container'>
      {products.map((product, index) => {
        let id
        switch (product.category) {
            case "electronics": id = 0
                break;
            case "jewelery": id = 1
                break;
            case "men's clothing": id = 2
                break;
            case "women's clothing": id = 3
                break;
        
            default: id = null
                break;
        }
        return <div
        
        id={id}
        key={index} 
        className={`grid-item ${product.category}`}>
            <img 
            src={`${product.image}`} 
            alt={`${product.title}`}>   
            </img>
            <h2>{product.title}</h2>
        </div>
      })}
    </div>
  )
}
