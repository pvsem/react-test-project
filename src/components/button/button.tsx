import React from 'react';
import './button.css';

function Button() {
    return (
        <button
            className='button'
            type='button'
            onClick={() => console.log('Click')}
        >
            Search
        </button>
    );
}

export default Button;
