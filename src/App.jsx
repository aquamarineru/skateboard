import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import useContentful from './useContentful'

function App() {
  const [ products, setProducts ] = useState([])
  const { getProducts } = useContentful()

  useEffect(() => {
    getProducts().then((response) => console.log(response))
  })
  return (
    <div className="App">
      <Navbar />
    </div>
  )
}

export default App;
