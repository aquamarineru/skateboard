import React, {useState} from 'react'
import { ImSearch } from "react-icons/im";

export default function Search() {
    const [search, setSearch] = useState("")

    return (
    <div className='relative flex items-center focus-within:text-gray-100'>
        <form className="search-form ml-4 flex items-center w-full max-w-md ">
            <button 
            type="submit" 
            className="search-button absolute ml-3 text-gray-400 pointer-events-none"
            >
            <ImSearch className='w-5 h-5'/>
            </button>
            <input 
            type="text" 
            className="search pr-3 pl-10 py-2 font-semibold placeholder-gray-400 text-black rounded-2xl border-none ring-2 ring-gray-400 focus:ring-2 w-full bg-[#1B272C] hover:bg-white hover:text-black" 
            placeholder='Search' 
            autoComplete='off' 
            aria-label='Search'/>
            
        </form>
    </div>
  )
}
