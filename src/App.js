import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';

import { WEATHER_KEY } from './keys'

function App() {
  const [state, setState] = useState({
    temperature: '',
    description: '',
    humidity: '',
    wind_speed: '',
    pressure: '',
    clouds: '',
    city: '',
    country: '',
    error: null,
  });


  const getWeather = async e => {
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    e.preventDefault();

    if (cityValue && countryValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&lang=sp&appid=${WEATHER_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data)

      setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        pressure: data.main.pressure,
        clouds: data.clouds.all,
        city: data.name,
        country: data.sys.country,
        error: null
      })
    } else{
      setState({error: 'Por favor ingrese una ciudad y un país.'})
    }

  }


  return (
    <div className="container p-4">
      <div className='row'>
        <div className='col-md-6 mx-auto'>
          <WeatherForm getWeather={getWeather} />
          <WeatherInfo {...state} />
        </div>
      </div>
    </div>
  );
}

export default App;
