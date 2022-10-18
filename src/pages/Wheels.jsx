import React from 'react'
import useContentful from '../useContentful'
import { useState } from 'react';
import { useEffect } from 'react';

const Wheels = () => {
  const { getWheels } = useContentful();
  const [wheels, setWheels] = useState ([])

  useEffect(() => {
    getWheels().then((response) => setWheels(response))
  },[])
  
  return (
    <div className='wheels'>
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
export default Wheels
