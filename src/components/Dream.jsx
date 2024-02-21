import React, { useEffect, useState } from 'react';
import { imagesArr } from './sombodey';

export const Dream = () => {

    const images = imagesArr;
    console.log(images);

    const [data, setData] = useState([images]);
    
   


    return (
        <section className="right img">
            <h2>Dream team</h2>
            {data.map((item, key) => <img src={item} key={key} />)}
        </section>
    )
}