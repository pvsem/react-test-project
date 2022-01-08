import React, { useEffect, useState } from 'react';
import './card-container.css';
import Card from '../card/card';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../actions/getNews';

function CardContainer() {
    const news = useSelector((state) => state);
    const dispatch = useDispatch();
    //@ts-ignore
    useEffect(() => dispatch(getNews()), []);
    function displayCards(articles: Array<any>) {
        return articles.map((item, i) => {
            if (item.title) {
                return <Card data={item} key={i} />;
            }
            return null;
        });
    }
    console.log(news, 'wawe');
    return (
        <section className='cardWrapper'>{displayCards(news as any)}</section>
    );
}

export default CardContainer;
