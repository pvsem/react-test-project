import React, { useEffect, useState } from 'react';
import './card-container.css';
import Card from '../card/card';
import getAllNews from '../../api/news';

function CardContainer() {
    const [news, setNewsState] = useState<any[]>([]);
    useEffect(() => {
        (async function () {
            const news = await getAllNews(1);
            setNewsState(news);
        }());
    }, []);
    function displayCards(articles: Array<any>) {
        return articles.map((item, i) => {
            if (item.title) {
                return <Card data={item} key={i} />
            }
            return null;
        });
    }
    console.log(news, 'wawe');
    return (
        <section className='cardWrapper'>
            {displayCards(news)}
        </section>
    );
}

export default CardContainer;
