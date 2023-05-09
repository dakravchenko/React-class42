import React, {useState} from 'react'
import {Category} from '../components/Category/Category.js'
import {Product} from '../components/Product/Product.js'
import { Header } from '../components/Header/Header.js'
import '../pages/Products.css'

export default function Products() {
    return (
      <div>
        <Header title={'Products'} />
        <Category />
        <Product />
      </div>
    );
  }
  