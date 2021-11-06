import React from 'react'

const Search = ({toggle, setToggle}) => {
    const buttonHandler = ()=> {
        setToggle(!toggle)
    };
    return (
        <div className={!toggle ? 'hidden': ''}>
            <div className='flex justify-end m-3'>
                <button onClick={buttonHandler} className='text-white text-xl focus:outline-none'>
                    &#1005;
                </button>
            </div>
            <div className='flex items-baseline justify-center'>
                <input type='text' name='places' id='places' placeholder='Search for location' 
                classname='input mt-10 ml-2 p-3 w-auto focus:outline-none focus:ring focus:border-red-100'
                /**onChange={e => setCity(e.target.value)} 
                value={city}**/
                 />

                <button className='bg-blue-200 p-2 mx-2 rounded-md focus:outline-none focus:ring-2
                focus:ring-purple-200 focus:ring-opacity-50 hover:bg-grey-600 hover:text-white
                transition duration-300 ease-in-out text-black' /**onKeyPress={getWeather}**/ >Search</button>

            </div>
        </div>
    )
    
};

export default Search
