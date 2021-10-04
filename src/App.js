import React, { useState, useEffect} from 'react';
import Weather from './Components/Weather';

const App = () =>  {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(
      (result) => {
      setData(result);
      console.log(result);
    },)
  },[])

    return (
      <div>
        <Weather weatherData={data} />
      </div>
    )
};

export default App;
