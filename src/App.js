import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Components/Layout";
import Search from "./Components/Search";
import Weather from "./Components/Weather";

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=Caracas&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Layout>
      <Search />
      <Weather weatherData={data} />
    </Layout>
  );
};

export default App;
