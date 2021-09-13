import {
  Container,
  Typography,
  Box,
  Button,
  Input,
  Grid
} from "@material-ui/core";
import React, { useState } from "react";

import Axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    description: "",
    temp: 0,
    min_temp: 0,
    max_temp: 0,
    pressure: 0,
    humidity: 0,
    country: ""
  });
  const [loaded, setLoaded] = useState(false);

  const button = () => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6fdd215591c362759fd7a19e5f5e541b`
    ).then((res) => {
      console.log(res.data);
      setWeatherData({
        description: res.data.weather[0].description,
        temp: res.data.main.temp,
        min_temp: res.data.main.temp_min,
        max_temp: res.data.main.temp_max,
        pressure: res.data.main.pressure,
        humidity: res.data.main.humidity,
        country: res.data.sys.country
      });
      setLoaded(true);
    });
  };
  const textOnChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <Container maxWidth="lg" className="Container">
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <Box p={1}>
          <Typography> WEATHER APP </Typography>
        </Box>

        <Box p={1}>
          <Input
            onChange={textOnChange}
            placeholder="Enter location"
            autoFocus={true}
            className="input"
            type="text"
          />
        </Box>

        <Box p={1}>
          <Button onClick={button} variant="contained" color="primary">
            GET WEATHER
          </Button>
        </Box>

        {loaded && (
          <Box p={1}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid>Description:{weatherData.description}</Grid>
              <Grid>Temperature:{weatherData.temp}</Grid>
              <Grid>MinTemperature:{weatherData.temp_min}</Grid>
              <Grid>MaxTemperature:{weatherData.temp_max}</Grid>
              <Grid>Pressure:{weatherData.pressure}</Grid>
              <Grid>Humidity:{weatherData.humidity}</Grid>
              <Grid>country:{weatherData.country}</Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Container>
  );
}
