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
    <div className="decks">
      {decks.map(e => <div>
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
export default Decks
