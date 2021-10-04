import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Weather({weatherData}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
        {/*Stackoverflow: Try weatherData.main && weatherData.main.temp because at runtime the values are still loading.*/}
            La tempratura hoy es de: {weatherData.main && weatherData.main.temp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

 export default Weather;