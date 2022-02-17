import React from 'react'

const WeatherForm = (props) => {
    return (
        <div className='card card-body'>
            <form onSubmit={props.getWeather}>
                <div className='form-group'>
                    <input type='text' name='city' placeholder='Tu ciudad' className='form-control' autoFocus />
                </div>
                <div className='form-group mt-2'>
                    <input type='text' name='country' placeholder='Tu pais' className='form-control' />
                </div>
                <div className='d-grid gap-2'>
                    <button className='btn btn-success btn-block mt-2 '>Obtener clima
                    </button>

                </div>
            </form>
        </div>
    )
}

export default WeatherForm