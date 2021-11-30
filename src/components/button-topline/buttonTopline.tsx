import React from 'react';
import './buttonTopline.css';

function ButtonTopline(text: string) {
    return (
        <button
            className='button'
            type='button'
            onClick={() => console.log('Click')}
        >
            {text}
        </button>
    );
}

export default ButtonTopline;
