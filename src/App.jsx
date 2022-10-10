import { useState, useEffect } from 'react'
import './App.css'
import useContentful from './useContentful'

function App() {
  const [ products, setProducts ] = useState([])
  const { getProducts } = useContentful()

  useEffect(() => {
    getProducts().then((response) => console.log(response))
  })
  return (
    <div className="App">
    
    </div>
  )
}

export default App
