import React from 'react';
import './topline.css';
import { Link } from 'react-router-dom';

function Topline() {
    return (
        <div className='toplineWrapper'>
            <Link to='/'>News</Link>
            <Link to='/about'>About</Link>
        </div>
    );
}

export default Topline;
