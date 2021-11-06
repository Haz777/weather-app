import './App.css';
import { React, useState } from 'react';
import Layout from './components/Layout/Layout';
import LeftAside from './components/LeftAside/LeftAside';
import Search from './components/LeftAside/Search';
import RightAside from './components/RightAside/RightAside';

function App() {

const apiKey ='ceaebbe8a856935a9a256f55677a16d6'
const [weatherData, setWeatherData]=useState([{}]);
const [city, setCity]=useState('');
const [toggle,setToggle]=useState(false);

const getWeather = (event) => {
  if(event.key ==='Enter') {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`)
    .then( response => response.json())
    .then( data =>{
      setWeatherData(data)
      setCity('')
    })
  }
}
  return <Layout>
    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-10 '>
      <aside className='col-span-1 lg:col-span-2 
      bg-blue-lighter h-full n'>
        <LeftAside toggle={toggle} setToggle={setToggle}/>
        <Search toggle={toggle} setToggle={setToggle}/>
      </aside>
      <aside className='col-span-1 lg:col-span-4 bg-blue-dark h-full'>
        <RightAside/>
      </aside>
      

    </div>
    </Layout>
}

export default App;
