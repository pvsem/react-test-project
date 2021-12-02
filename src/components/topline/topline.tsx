import React from 'react';
import './topline.css';
import { Link } from 'react-router-dom';

function Topline() {
    return (
        <div className='toplineWrapper'>
            <div className='logoContainer'>
                <Link className='toplineLogo' to='/'></Link>
            </div>
            <nav className='toplineNav'>
                <div className='toplineItem'>
                    <Link className='toplineLink' to='/'>
                        News
                    </Link>
                </div>
                <div className='toplineItem'>
                    <Link className='toplineLink' to='/about'>
                        About
                    </Link>
                </div>
            </nav>
            <div className='toplineItemLogin'></div>
        </div>
    );
}

export default Topline;
