import SearchBox from "./SearchBoc";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {

    let [weatherInfo, setweatherInfo] = useState({city : "Delhi",
        feelsLike : 32,
        humidity : 91,
        temp : 27.13,
        tempMax : 27.13,
        tempMin : 27.13,
        weather : "overcast clouds"
    });

    let updateInfo =  (newinfo) => {
        setweatherInfo(newinfo);
    }
    return (
        <div style = {{textAlign : "center"}}> 
            <h2>Weather App by Kushal</h2>
            <SearchBox updateInfo = {updateInfo}/> 
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}