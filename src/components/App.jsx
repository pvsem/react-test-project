import React from 'react';
import SearchBar from './search-bar/search-bar';
import Button from './button/button';
import './app.css';
import CardContainer from './card-container/card-container';

function App() {
    return (
        <main className='page'>
            <div className='searchWrapper'>
                <SearchBar />
                <Button />
            </div>
            <CardContainer />
        </main>
    );
}

export default App;
