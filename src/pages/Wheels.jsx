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
    <> 
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center pt-5 leading-relaxed">SKATEBOARD WHEELS</h2>
     <p className='w-[900px] font-light text-xl leading-relaxed pl-24 pt-5'>Skateboard wheels don't last forever and are important for your setup to perform well. Whether for your old or new skateboard: at skatedeluxe you'll find skateboard wheels in different sizes, hardnesses, and shapes. Our recommendations will show you the perfect wheel for your board. </p>
    <div className='wheels flex justify-between items-center p-14 px-24'>
      {wheels.map(e => <div className='border p-4 flex flex-col items-center'>
        <img className='h-[400px]' src={e.image.fields.file.url}/>
        <h3 className='w-[400px] uppercase font-bold text-xl leading-relaxed text-center'>{e.name}</h3>
        <p className='font-light w-[400px]'>Description: {e.description}</p>
        

        
        </div>)} 
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
    </>
  )
}
export default Wheels

