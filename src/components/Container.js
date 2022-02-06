import {useContext, useEffect,useState }from 'react';
import axios from 'axios';
import '../weather.css';

import WeatherContext from '../context/WeatherContext';
import Weathercontainer from './Weathercontainer';

export default function Container() {
    const {weather, setWeather}=useContext(WeatherContext);
    const [apidata, setApidata] = useState(0);

    
    useEffect(()=>{
       
        
    let location;
    let resultData="";
   //weather=cityname
   console.log("weather-city:", weather)
    switch (weather) {
        case "Istanbul":
            location="lat=41.01&lon=28.97";
            break;
            case "Ankara":
            location="lat=39.92&lon=32.86";
            break;
            case "Izmir":
            location="lat=38.42&lon=27.14";
            break;
    
        default:
            break;
    }

    console.log()
    let endpoint=`https://api.openweathermap.org/data/2.5/onecall?${location}&exclude=minutely&units=metric&appid=953871f836127956353a8f176a142782&lang=tr`;
    let result= axios.get(endpoint).then(function (response) {
        console.log(response.data);
        setApidata(response.data)
      }); 
    


        
    },[weather])


    return <div className='mx-auto mt-5 p-1 '>
<select onChange={(e)=>setWeather(e.target.value)} className="
container  mx-auto hover:bg-amber-500 block  w-full bg-gray-200 border border-gray-200
 text-gray-700 
py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
  <option value="Ankara">Ankara</option>
  <option selected  value="Istanbul">İstanbul</option>
  <option value="Izmir">İzmir</option>
</select>


<Weathercontainer data={apidata} city={weather}></Weathercontainer>
      
    </div>
  
  
  }

  

//https://api.openweathermap.org/data/2.5/onecall?lat=39.12&lon=32.86&exclude=minutely&units=metric&appid=953871f836127956353a8f176a142782&lang=tr

 
