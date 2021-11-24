import React from 'react';
import './date.css';

function Date() {
    return (
        <input
            type='date'
            id='dateInput'
            className='dateInput'
            min='2021-10-01'
        />
    );
}

export default Date;
