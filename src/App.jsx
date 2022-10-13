import { useEffect, useState } from 'react'
import './App.css'
import useContentful from './useContentful'
import ProductCard from './ProductCard';




function App() {
  const { getProducts } = useContentful();
  const [products, setProducts] = useState ([])
  

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  });

    return (
      <div>
        <h1>Victor's Skateboards</h1>
           {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
    );  

}


export default App

