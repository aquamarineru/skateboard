import React, {useState} from 'react'
import { ImSearch } from "react-icons/im";

export default function Search() {
  return (
    <div className='relative flex items-center focus-within:text-gray-600'>
        <form className="search-form ml-4 flex items-center w-full max-w-md">
            <button 
            type="submit" 
            className="search-button absolute ml-3 text-gray-500 pointer-events-none"
            >
            <ImSearch className='w-5 h-5'/>
            </button>
            <input 
            type="text" 
            className="search pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-red-500 focus:ring-2 w-full" 
            placeholder='Search' 
            autoComplete='off' 
            aria-label='Search'/>
            
        </form>
    </div>
  )
}
