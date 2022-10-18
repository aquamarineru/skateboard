import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import useContentful from './useContentful'
import ProductCard from './ProductCard';
import Home from './pages/Home'; 
import {Route, Routes,} from 'react-router-dom'
import NotFound from './components/NotFound'
import Decks from './pages/Decks'
import Bearings from './pages/Bearings'
import Griptape from './pages/Griptape'
import Hardware from './pages/Hardware'
import Trucks from './pages/Trucks'
import Wheels from './pages/Wheels'
import PacmanLoader from "react-spinners/PacmanLoader";


function App() {
  
    const [loading, setLoading] =useState(true)
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  
  
 
  return (
     
    <>
            <Navbar />
            
      <div className="container">
        {
          loading ?
          (<PacmanLoader 
          className='pacman'
          size={100}
          color={'#dd052b'}
          loading={loading}
        />)
        :
          
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
        }
      </div>
      
    </>
  
  )
}


export default App



