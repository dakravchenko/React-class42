import './App.css'
import React, {useState} from "react";
import allCategories from "./fake-data/all-categories";
import allProducts from "./fake-data/all-products"
import Category from "./Category";
import Product from "./Product";

function App() {
  const [id, setId] = useState(null)

  function selectCategory(id){

  }
  return (
    <div className="App">
      <h1>Products</h1>
      <Category selectCategory={selectCategory}/>
      <Product/>
    </div>
  );
}

export default App;
