import React, { useState, useEffect} from 'react';
import Weather from './Components/Weather';
import Search from './Components/Search';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


const App = () =>  {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");



  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(
      (result) => {
      setData(result);
      console.log(result);
    },)
  },[])

  const search = (e) => {
    if (e.key === "Enter") {
      setQuery("");
          }
  };

  const handleChange = (e) => 
    e.preventDefault();
    setInput(e.target.value.toLowerCase());
    return (
      <div>
        <TextField
          id="outlined-basic" 
          label="Outlined"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment 
               type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }} 
        />
        <Weather weatherData={data} />
      </div>
    )
};

export default App;
