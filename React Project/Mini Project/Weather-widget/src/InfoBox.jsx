import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';
export default function InfoBox({info}) {

    let URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const Hot_url = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D" ;
     const cold_url = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
     const Rain_url = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"; 

    return (
        <div className="InfoBox">
            
               <div className= 'container'>
                <Card sx={{ maxWidth: 345 }}>
                 
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? Rain_url : (info.temp > 15 ? Hot_url : cold_url)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80
           ? <ThunderstormIcon /> : (info.temp > 15 ? <WhatshotIcon /> : <AcUnitIcon />)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature : {info.temp}&deg;C</p>
          <p>Humidity : {info.humidity}&deg;C</p>
            <p>Min Temp : {info.tempMin}&deg;C</p>
            <p>Max Temp : {info.tempMax}&deg;C</p>
            <p>The Weather can be described as <i>{info.weather}</i> and feels Like : {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
</div>
        </div>
    );
} 