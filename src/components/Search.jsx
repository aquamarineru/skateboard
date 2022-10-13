import React, {useState} from 'react'

export default function Search() {
  return (
    <div>
        <form className="search-form ml-4">
            <input type="text" className="search" />
            <button type="submit" className="search-button">
            🔎
            </button>
        </form>
    </div>
  )
}
