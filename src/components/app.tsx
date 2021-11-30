import React from 'react';
import SearchBar from './search-bar/search-bar';
import Button from './button/button';
import './app.css';
import CardContainer from './card-container/card-container';
import Date from './date/date';
import Checkbox from './checkbox/checkbox';
import Topline from './topline/topline';

function App() {
    return (
        <React.Fragment>
            <Topline />
            <main className='page'>
                <div className='searchWrapper'>
                    <SearchBar />
                    <Button />
                </div>
                <CardContainer />
            </main>
        </React.Fragment>
    );
}

export default App;
