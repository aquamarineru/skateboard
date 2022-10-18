import React from 'react'
import useContentful from '../useContentful'
import { useState } from 'react';
import { useEffect } from 'react';

const Hardware = () => {
  const { getHardware } = useContentful();
  const [hardware, setHardware] = useState ([])

  useEffect(() => {
    getHardware().then((response) => setHardware(response))
 },[]) 
  
  return (
    <div className="Hardware">
      {hardware.map(e => <div>
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




export default Hardware
