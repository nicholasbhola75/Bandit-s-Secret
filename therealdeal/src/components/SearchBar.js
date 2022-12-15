import React from 'react'
import './SearchBar.css'

function SearchBar({placeholder}) {
  return (
    <div className='search'>
        <form className='searchInputs'>
            <input 
            type="text" 
            placeholder={placeholder}
            value=""
            onChange={{}}
            />
            <div className='searchIcon'></div>
        </form>
    </div>
  )
}

export default SearchBar;