import React from 'react';
import '../weather.css';

function Weathercontainer(props) {
    const data=props.data;
    let weeksDay = ['Paz', 'Pzt', 'Sal', 'Çarş', 'Per', 'Cum', 'Cmt'];


//conditional render 
  if (data)
  {return <div>
      
      
  
     <div className='grid grid-cols-1 sm:grid-cols-8 gap-4 lg:gap-8 w-full  p-3 daysContainer ' data-tag="daysContainer">

     {data.daily.map((x,i) =><div key={i}  className='
     p-2
     hover:bg-amber-500 justify-between border text-center flex  flex-col items-center' data-tag="day">
       <div><b>{ weeksDay[ new Date(x.dt * 1000).getDay()]}</b></div>
        <div><img src={`http://openweathermap.org/img/wn/`+x.weather[0].icon+`.png`} /></div>
       <div className='capitalize'>{ x.weather[0].description}</div>
       <div><b>{x.temp.day }°</b> {x.temp.min }° </div>
     </div>)}
     </div>
    <div className='container mx-auto' style={{fontSize:'0.8rem'}} ><b>{props.city}</b>  {`lat:`+data.lat+` lon:`+data.lon}</div>

 </div>;}
  else {
      console.log("comp empty")
      return "";
  }

}

export default Weathercontainer;
