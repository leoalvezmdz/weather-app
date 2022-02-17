import React from 'react'

const WeatherInfo = (props) => {
    console.log(props)
    return (
        <div>
            {
                props.error &&
                <div className='alert alert-danger mt-2 text-center'>
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ? 
                <div>
                    <div className='card card-body mt-2'>
                        <p>
                            Ubicación: {props.city}, {props.country}
                        </p>
                        <p>
                            Temp: {props.temperature}°C 
                        </p>
                        <p>
                            Humedad: {props.humidity}%
                        </p>
                        <p> Viento: {props.wind_speed} m/s
                        </p>
                        <p> Presión: {props.pressure} hPa
                        </p>
                        <p> Nubosidad: {props.clouds} %, {props.description}
                        </p>
                    </div>

                </div> : <div className='card card-body mt-2 text-center'>
                    <p>Sin datos. Por favor, ingrese una ciudad y país.</p>
                </div>
            }
        </div>
    )
}

export default WeatherInfo