import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import useContentful from './useContentful'
/* import ProductCard from './ProductCard'; */
import Home from './pages/Home'; 
import {Route, Router, Routes,} from 'react-router-dom'
import NotFound from './components/NotFound'
import Decks from './pages/Decks'
import Bearings from './pages/Bearings'
import Griptape from './pages/Griptape'
import Hardware from './pages/Hardware'
import Trucks from './pages/Trucks'
import Wheels from './pages/Wheels'


function App() {
  const { getProducts } = useContentful();
  const [products, setProducts] = useState ([])
  
  useEffect(() => {
    getProducts().then((response) => setProducts(response))
  })
  /** React Router function */
  /* let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/decks":
      component = <Decks />
      break
    case "/trucks":
      component = <Trucks />
      break
    case "/wheels":
      component = <Wheels />
      break
    case "/bearings":
      component = <Bearings />
      break
    case "/hardware":
      component = <Hardware />
      break
    case "/griptape":
      component = <Griptape />
      break

  }  */
  return (
/*     <div className="App">
      <Navbar />
      <Home />
      <h1>Victor's Skateboards</h1>
      {products.map((product, index) => <ProductCard key={index} product={product} />)}
</div> */
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/decks' element={<Decks />} />
          <Route path='/trucks' element={<Trucks />} />
          <Route path='/wheels' element={<Wheels />} />
          <Route path='/bearings' element={<Bearings />} />
          <Route path='/hardware' element={<Hardware />} />
          <Route path='/griptape' element={<Griptape />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      
    </>
  
  )
}


export default App



