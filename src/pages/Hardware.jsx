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
    <>
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center pt-5 leading-relaxed">SKATEBOARD HARDWARE</h2>
     <p className='w-[900px] font-light text-xl leading-relaxed pl-24 pt-5'>Skateboard bolts and nuts make sure that your trucks stay firmly on your deck. The necessary bolt packs differ in size and by different head bolts. At skatedeluxe you will find the right bolt pack - whether for your skateboard, longboard or cruiser.</p>
    <div className="Hardware flex justify-between items-center p-14 px-24">
      {hardware.map(e => <div className='border p-4 flex flex-col items-center'>
        <img className='h-[400px]' src={e.image.fields.file.url}/>
        <h3 className='w-[400px] uppercase font-bold text-xl leading-relaxed text-center'>{e.name}</h3>
        <p className='font-light w-[400px]'>Description: {e.description}</p>
        

        
        </div>)} 
    </div>
    </>
  )
}




export default Hardware