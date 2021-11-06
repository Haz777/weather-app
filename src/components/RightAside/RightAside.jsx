import React from 'react';
import Card from '../Card/Card';
import CardStatus from '../CardStatus/CardStatus';
import InfoCard from '../InfoCard/InfoCard';
import MinMaxCard from '../MinMaxCard/MinMaxCard';



const RightAside = () => {
    return <>
    <div className='flex-col justify-center items-center text-white'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5 mt-14 gap-2 p-2'>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
        </div>
        <div className='flex justify-start items-center mt-6 ml-4'>
            <p className='text-4xl font-bold'>Today's Highlights</p>
        </div>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 m-2'>
                <CardStatus/>
                <MinMaxCard/>
                <InfoCard title='Visibility' unit='Miles'/>
                <InfoCard title='Air Pressure' unit='mb'/>
        </div>
    </div>
    </>
}

export default RightAside;