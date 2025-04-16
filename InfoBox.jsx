//we create a function that's name infobox 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { yellow } from '@mui/material/colors';



function InfoBox({info}) {
    // const DUSTY_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL ="https://images.unsplash.com/photo-1718917910629-55b5f8f7bd08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
return(
    <div className="infobox">
        <div className='cardcontainer'>
        <Card sx={{ maxWidth: 365, border: 2}}>
      <CardMedia
        sx={{ height: 200, border:3, borderColor:'GrayText' }}
        image={
            info.humidity >80?
             RAINY_URL:
             info.temp > 15 ?
             HOT_URL: 
             COLD_URL
            }
        title="green iguana"
      />
      <CardContent id="cardcontent">
        <Typography gutterBottom variant="h5" component="div" id='typo'>
          {info.city}  {
            info.humidity >80
             ?<ThunderstormIcon/>
             :info.temp > 15 
             ?<WbSunnyIcon/> 
             :<AcUnitIcon/>
             
             }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.primary'}}>
            <div>Temprature = {info.temp}</div>
            <div> Min Temprature = {info.tempmin}</div>
            <div> Max Temprature = {info.tempmax}</div>
            <div> Humidity = {info.humidity}</div>
            <div> The weather can be describe as <i>{info.weather}</i>and feels Like is{info.feels_like}</div>
            </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
)
 };

export default InfoBox;