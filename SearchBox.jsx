    import TextField from '@mui/material/TextField'; //using TextFeild in here from material Ui components
    import Button from '@mui/material/Button';
    import "./SearchBox.css" ; 
    import { useState } from 'react';


    //create a function that's name SearchBox.
    function SearchBox({ updateInfo }){
        let [City, setCity] = useState("");  //state method

        //we used our cureent weather api in here 
        const API_URL = "https://api.openweathermap.org/data/2.5/weather"; //this is our weather api  url 
        const API_KEY = "a00b9f1fd51b1845665a60cf4571d8bc" ; //this is our weather api key 

    //create a function jo hame current weather information dega 
    let getWeatherInfo = async() =>{
    let response =  await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`); // we used in here api url 
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
        city: City,
        temp: jsonResponse.main.temp,
        tempmin:jsonResponse.main.temp_min,
        tempmax:jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
    }
    return result;
        };

        //and we create a handleChange Function 
        let  handleChange = (evt) => { //create a function handlechange when i create any changes in my searchbox when instently change my searchbox 
        setCity(evt.target.value)
        }
    
        //an we create a handleSubmit function 
        let handleSubmit = async (evt) => {
            evt.preventDefault(); //this is a function that prevent the default action of the form
            console.log(City);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        return(
            <div>
                <h2><u> SEARCH THE CITY WEATHER </u></h2>
                <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name " variant="outlined"  value={City} onChange={handleChange} required/>
                <br></br><br></br>
                <Button variant="contained" color='error' type='submit '>Search</Button>
            </form>
            </div>
            
        ) 
    };

    export default SearchBox;

    //note: jab bhi hamere pass hum koi form basis kuch bhi banate hai to hum state variable ka use karte hai 