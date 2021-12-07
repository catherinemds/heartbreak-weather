import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import Grid from '@mui/material/Grid';

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=Caracas&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>
  <Grid item xs={3}>
      <Search/>
      <Weather weatherData={data} />
      </Grid>   
</Grid> 

    </div>
  );
};

export default App;
