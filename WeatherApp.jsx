//we import here InfoBox and SearchBox file in here and this is common file 
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp(){
    //lets create a state variable
    const [WeatherInfo , setWeatherInfo ] = useState( {
        city: "Delhi",
        feelsLike:24.48,
        temp:25.05,
        tempmin:25.05,
        tempmax:25.05,
        humidity:47,
        weather:"haze",
    });
    //when i update the country in my searchbox then the information of the weather of that country so i create a updateInfo function 
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <br></br>
            <InfoBox  info={WeatherInfo}/>
        </div>
    )
}

export default WeatherApp; 