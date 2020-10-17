import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {


    const ficha = robots.map((d, i) => {
        return(<Card key={i} id={d.id} name={d.name} email={d.email} />);
    });

    return(
        <div>
            {ficha}
        </div>
    );
}

export default CardList;
