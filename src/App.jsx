import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import useContentful from './useContentful'
import ProductCard from './ProductCard';




function App() {
  const { getProducts } = useContentful();
  const [products, setProducts] = useState ([])
  

  useEffect(() => {
    getProducts().then((response) => console.log(response))
  })
  return (
    <div className="App">
      <Navbar />
    </div>
  )
}


export default App



