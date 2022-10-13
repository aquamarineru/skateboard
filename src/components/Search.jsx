import React, {useState} from 'react'
import { FcSearch } from "react-icons/fc";

export default function Search() {
  return (
    <div>
        <form className="search-form ml-4">
            <input type="text" className="search" placeholder='Search' />
            <button type="submit" className="search-button">
            <FcSearch />
            </button>
        </form>
    </div>
  )
}
