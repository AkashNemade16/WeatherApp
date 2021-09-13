import axios from "axios";

export const WeatherData=()=>(
  axios.get('api.openweathermap.org/data/2.5/weather?q={NewYork}&appid={cb7277d5ec140b37517cb73278e42157}')
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
)