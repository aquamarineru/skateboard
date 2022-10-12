import { useState, useEffect } from 'react'
import './App.css'
import useContentful from './useContentful'
import Products from './Products'

function App() {
  const [ products, setProducts ] = useState([])
  const { getProducts } = useContentful()

  useEffect(() => {
    getProducts().then((response) => setProducts(response))
  });
  return (<div>{products.map((product, index) => product.brand)}</div>)
}

export default App
