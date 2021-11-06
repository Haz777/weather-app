import React from 'react';

const CardStatus = () => {
    return(
        <div className='bg-blue-lighter rounded-lg px-auto py-8'>
            <div className='flex-col'>
                <p className='text-center text-grey-300'>Wind Speed</p>
                <div class='flex justify-center items-center mt-5'>
                    <span className='text-5xl font-bold'>
                        5
                        <sub className='font-lighter ml-1'>mph</sub>
                    </span>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <i className='material-icons'>navigation</i>
                    <span className='text-grey-100'>N</span>
                </div>
            </div>
        </div>
    )
}

export default CardStatus