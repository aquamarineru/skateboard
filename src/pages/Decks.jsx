import React from 'react'
import useContentful from '../useContentful'
import { useState } from 'react';
import { useEffect } from 'react';

const Decks = () => {
  const { getDecks } = useContentful();
  const [decks, setDecks] = useState ([])

  useEffect(() => {
    getDecks().then((response) => setDecks(response))
    console.log(setDecks)},[])
  
  return (
    <>
     <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center pt-5 leading-relaxed">SKATEBOARD DECKS</h2>
     <p className='w-[900px] font-light text-xl leading-relaxed pl-24 pt-5'>There are different types of skateboards, depending on which parts are used to make them. Besides the visible differences, skateboards can also be distinguished by how they are used. In other words: depending on how and where you want to skate, there's the right skateboard for you.</p>
    <div className="decks flex justify-between items-center p-14 px-24">
      {decks.map(e => <div className='border p-4 flex flex-col items-center'>
        <img className='h-[400px]' src={e.image.fields.file.url}/>
        <h3 className='w-[400px] uppercase font-bold text-xl leading-relaxed text-center'>{e.name}</h3>
        <p className='font-light w-[400px]'>Description: {e.description}</p>
        {/* <div>
        <h3>{e.name}</h3>
        <img src={e.image.fields.file.url}/>
        </div>
        <div><p>description: {e.description}</p>
        

        
        </div> */}
      </div>)} 
    </div>
    </>
  )
}
export default Decks
