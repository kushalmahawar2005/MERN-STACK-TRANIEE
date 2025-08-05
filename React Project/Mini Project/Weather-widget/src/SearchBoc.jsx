import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
   let [city , setCity] = useState("");
    let [error , setError] = useState(false);
    const Api_Url = "https://api.openweathermap.org/data/2.5/weather";
    const Api_Key = "b60aff01d6e137f0ca5d2e90b3b18e26";

    let getWeatherInfo = async () => {
        try {
       let response =  await fetch(`${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`);
       let data = await response.json();
       let result = {
        city : city,
        temp : data.main.temp,
        tempMin : data.main.temp_min,
        tempMax : data.main.temp_max,
        humidity : data.main.humidity,
        feelsLike : data.main.feels_like,
        weather : data.weather[0].description
       };
       console.log(result);
       return result;
    } catch(err){
        throw err;
    }
};
    

    let handleChange =  (event) => {
         setCity(event.target.value);
         console.log(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
        event.preventDefault();
        setCity("");
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
        } catch (err) {
            setError(true);
        }
    }


    return (
      <div className='SearchBox'>
        <h3>Search For Weather</h3>
        <form onSubmit={handleSubmit}>
            
      <TextField id="city" label="City Name" variant="outlined" required value = {city} onChange={handleChange}/>
        <br></br>
        <Button variant="contained" type = "submit">
        Search
      </Button>
      {error && <p>No Such Place Exists </p> }
        </form>
        
      </div> 
    );
}