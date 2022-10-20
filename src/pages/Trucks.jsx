import React from 'react'
import useContentful from '../useContentful'
import { useState } from 'react';
import { useEffect } from 'react';

const Trucks = () => {
  const { getTrucks } = useContentful();
  const [trucks, setTrucks] = useState ([])

  useEffect(() => {
    getTrucks().then((response) => setTrucks(response))
  },[])
  
  return (
    <div className='trucks'>
      {wheels.map(e => <div>
        <div>
        <h3>{e.name}</h3>
        <img src={e.image.fields.file.url}/>
        </div>
        <div><p>description: {e.description}</p>
        

        
        </div>
      </div>)} 
    </div>
  )
}
export default Trucks