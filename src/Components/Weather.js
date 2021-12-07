import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Weather({weatherData}) {

  const date= new Date();

  return (
    <Card sx={{ width: 640}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image="https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg"
          alt="clouds"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherData.name} {weatherData.sys && weatherData.sys.country}
          </Typography>
          <Typography>
            Date: {date.toLocaleDateString()}
            </Typography>
          <Typography variant="body2" color="text.secondary">
        {/*Stackoverflow: Try weatherData.main && weatherData.main.temp because at runtime the values are still loading.*/}
            La tempratura hoy es de: {weatherData.main && weatherData.main.temp}&deg;C
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
  
 export default Weather;