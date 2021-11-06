import React from 'react';

const Card = () => {
    return (
        <div className='bg-blue-lighter p-6 rounded-lg'>
            <div className='flex-col'>
                <p>2020-14-10</p>
                <div className='flex justify-center items-center'>
                <img src="https://www.metaweather.com/static/img/weather/lc.svg" alt='' width='50px' height='50px'/>
                </div>
            </div>
            <div className='flex justify-between'>
                <span>22°C</span>
                <span>26°C</span>
            </div>
        </div>
    )
};

export default Card;