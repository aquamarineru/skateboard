import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import useContentful from './useContentful'
import ProductCard from './ProductCard';


function App() {
  const { getProducts } = useContentful();
  const [products, setProducts] = useState ([])
  
  useEffect(() => {
    getProducts().then((response) => setProducts(response))
  })
  return (
    <div className="App">
    <Navbar />
    <h1>Victor's Skateboards</h1>
    {products.map((product, index) => <ProductCard key={index} product={product} />)}
</div>
  
  )
}


export default App



