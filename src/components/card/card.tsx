import React from 'react';
import './card.css';
import sourceRemove from '../../utils/sourceRemove';

function Card({ data }: any) {
    const imgStyle = {
        backgroundImage: 'url(' + data.urlToImage + ')',
    };
    // console.log(data, 'data in cards');
    return (
        <article className='card'>
            <div className='imgContainer' style={imgStyle} />
            <div className='infoContainer'>
                <div className='content'>
                    <h2 className='cardTitle'>{sourceRemove(data.title)}</h2>
                    <span className='description'>{data.description}</span>
                </div>
                <div className='cardBottom'>
                    <a className='url' href={data.url} target='_blank'>
                        Читать новость полностью &gt;&gt;
                    </a>
                    <div className='meta'>
                        <span className='source'>{data.source.name}</span>
                        <span className='timestamp'>
                            {data.publishedAt.slice(0, -1).replace(/T/g, ' ')}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Card;
