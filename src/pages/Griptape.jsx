import React from 'react'
import useContentful from '../useContentful'
import { useState } from 'react';
import { useEffect } from 'react';

const Griptape = () => {
  const { getGriptape } = useContentful();
  const [griptape, setGriptape] = useState ([])

  useEffect(() => {
    getGriptape().then((response) => setGriptape(response))
  },[])
  
  return (
    <div className='griptape'>
      {griptape.map(e => <div>
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
export default Griptape
