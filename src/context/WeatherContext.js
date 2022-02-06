import {createContext, useState, useEffect} from "react";


const WeatherContext = createContext();


export const WeatherProvider= ({children})=> {
 
    const [weather, setWeather] =useState("Istanbul");


 

 

    const values= { weather, setWeather}

    return <WeatherContext.Provider value={values}>{children} </WeatherContext.Provider>
}



export default WeatherContext;