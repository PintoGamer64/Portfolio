import React, { useState } from 'react';

//Css
import './habilities.css';

//Data
const { data, size } = require('../data.js');

export default function Body() {

    const [select, setSelect] = useState('javascript');

    let information = {
        title: select,
        level: 4
    };

    let level = '⭐⭐⭐⭐';

    //Names
    if (select === 'javascript') information = { level: 4 };
    if (select === 'react') information = { level: 3 };
    if (select === 'php') information = { level: 2 };
    if (select === 'npm') information = { level: 3 };
    if (select === 'nodejs') information = { level: 3 };
    if (select === 'java') information = { level: 2 };
    if (select === 'html') information = { level: 4 };
    if (select === 'git') information = { level: 3 };
    if (select === 'css') information = { level: 4 };

    //Stars
    if (information.level === 1) level = '⭐';
    if (information.level === 2) level = '⭐⭐';
    if (information.level === 3) level = '⭐⭐⭐';
    if (information.level === 4) level = '⭐⭐⭐⭐';
    if (information.level === 5) level = '⭐⭐⭐⭐⭐';

    return (

        <div className="Habilities">
            <div className="Elements-Technologies">
                {
                    data.map(e => {
                        return (
                            <div key={e.id} className="techs" onClick={() => setSelect(e.name)}>
                                <img src={e.img} alt='hola' width={size.width} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="Techs-Data">
                <div className='child'>
                    <h1> {select} </h1>
                    <h2>{level} - {information.level}</h2>
                </div>
            </div>
        </div>

    )

}