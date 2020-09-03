import React from "react"

const Weather = props => (
    <div class="iner">
    { props.city &&
        <div>
        <p>Location: {props.city}, {props.counrty}</p>
        <p>Temperature: {props.temp}</p>
        <p>Sunrise: {props.sunrise}</p>
        <p>Sunset: {props.sunset}</p>
         </div>
     }  
     <p>{props.error}</p>
        </div>
);


export default Weather;