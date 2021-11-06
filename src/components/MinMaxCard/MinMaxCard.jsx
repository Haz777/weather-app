import React from 'react'

const MinMaxCard = () => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-8'>
            <div className='flex-col'>
                <p className='text-center text-grey-300'>Temperature Range</p>
                <div className='flex justify-center items-center'>
                    <span className='text-5xl font-bold mt-5'>25-27
                        <sub className='font-lighter ml-1'>°C</sub>
                    </span>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <p className='text-grey-100'>Min - Max</p>
                </div>  
            </div>
            
        </div>
    )
}

export default MinMaxCard
