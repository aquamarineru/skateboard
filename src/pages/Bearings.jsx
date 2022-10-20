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
    <>
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center pt-5 leading-relaxed">SKATEBOARD BEARINGS</h2>
     <p className='w-[900px] font-light text-xl leading-relaxed pl-24 pt-5'>Your skateboard needs bearings in order to make headway! Good bearings are just as important for high speeds as for smooth rides. At skatedeluxe you can find bearings from top brands like Bones or Bronson as well as tips and information about skateboard bearings.</p>
    <div className='bearings flex justify-between items-center p-14 px-24'>
      {bearings.map(e => <div className='border p-4 flex flex-col items-center'>
        <img className='h-[400px]' src={e.image.fields.file.url}/>
        <h3 className='w-[400px] uppercase font-bold text-xl leading-relaxed text-center'>{e.name}</h3>
        <p className='font-light w-[400px]'>Description: {e.description}</p>
        

        
        </div>)} 
    </div>
    </>
  )
}
export default Bearings
