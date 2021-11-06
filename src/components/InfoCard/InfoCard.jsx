import React from 'react'

const InfoCard = (props) => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-4'>
            <div className='flex-col text-center'>
                <p>{props.title}</p>
                <div className='flex justify-center items-center p-3'></div>
                    <span className='text-5xl font-bold'>12
                        <sub className='ml-2 text-grey-300'>{props.unit}</sub>
                    </span>
            </div>
            
        </div>
    )
}

export default InfoCard
