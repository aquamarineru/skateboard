import React from 'react'
import useContentful from '../useContentful'
import { useState } from 'react';
import { useEffect } from 'react';

const Bearings = () => {
  const { getBearings } = useContentful();
  const [bearings, setBearings] = useState ([])

  useEffect(() => {
    getBearings().then((response) => setBearings(response))
  },[])
  
  return (
    <div className='bearings'>
      {bearings.map(e => <div>
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
export default Bearings
