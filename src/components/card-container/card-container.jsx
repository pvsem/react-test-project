import React from 'react';
import './card-container.css';
import Card from '../card/card';

function CardContainer() {
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
