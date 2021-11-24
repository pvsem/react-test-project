import React from 'react';
import './search-bar.css';

function SearchBar() {
    return (
        <input
            className='searchInput'
            type='text'
            name='searchBar'
            id='searchBar'
            placeholder='What are we looking for?'
        />
    );
}

export default SearchBar;
