import React, { useState } from 'react';
import './card.css';

function Card({ data }: any) {
    const imgStyle = {
        backgroundImage: 'url(' + data.urlToImage + ')',
    };
    console.log(data);
    return (
        <article className='card'>
            <div className='imgContainer' style={imgStyle} />
            <div className='infoContainer'>
                <h2 className='cardTitle'>{data.title}</h2>
                <span className='source'>{data.source.name}</span>
                <span className='timestamp'>{data.publishedAt.slice(0, -1).replace(/T/g, ' ')}</span>
            </div>
        </article>
    );
}

export default Card;
