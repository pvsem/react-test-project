import React from 'react';
import Topline from '../../components/topline/topline';
import './about.css';

function About() {
    return (
        <React.Fragment>
            <Topline />
            <main className='page'>
                <div className='infoAbout'>
                    This is a test website for news on React. All news I get
                    from newsapi.org
                </div>
            </main>
        </React.Fragment>
    );
}

export default About;
