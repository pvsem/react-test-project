import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/about/about';
import { Provider } from 'react-redux';
import { store } from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
