import React from 'react';
import './card-container.css';
import Card from '../card/card';
import getAllNews from '../../api/news';

function CardContainer() {
    const allNews = getAllNews(1);
    console.log(allNews);
    return (
        <section className='cardWrapper'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    );
}

export default CardContainer;
