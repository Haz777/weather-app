import React from 'react';

const LeftAside = ({toggle, setToggle}) => {
    const buttonHandler = () => {
        setToggle(!toggle);
    }
    return(
        <div className={toggle ? 'hidden': ''}>
           <div className='flex-col'>
               <div className='flex justify-center'>
                   <button className= 'bg-light-gray text-white mt-10 ml-10 rounded-md p-3 outline-none ' 
                   onClick={buttonHandler}>
                       Change location
                   </button>
                 </div>
                 <div className='flex justify-center items-center'>
                       <p className='text-white font-bold text-2xl mt-12'>
                           <i class='material-icons'>location_on</i> London, 
                           <span className='text-gray-50 font-bold mt-10 text-2xl'> Today</span>
                       </p>
                   </div>
               <div className='flex flex-col justify-start items-center h-full mt-10'>
                   <img src="https://www.metaweather.com/static/img/weather/c.svg" alt=''
                   width='150px' height='150px mb-10'></img>
                   <br/>
                   <p>
                    <span className='font-extraBold text-white text-7xl mt-10'>26</span>
                    <span className='text-white text-7xl '>°C</span>
                   </p>

                   <p className='text-gray-50  mt-10 text-3xl'>Clear</p>
               </div>
           </div>
        </div>
    )
}

export default LeftAside