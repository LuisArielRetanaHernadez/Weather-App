
// react-router-dom
import { Link } from 'react-router-dom'

// estilos del componente WeatherCity
import '../styles/WatherCity.style.css'

const WeatherCity = ({dataWeather}) => {

    return (
        <div className='container-weather-city'>
            <div className='container-name-city'><h3>{dataWeather.name}</h3></div>
            <div  className='about-weather'>
                <h2 className='temp-weather'>{(dataWeather.main.temp -  273.15).toFixed(1)}°c</h2>
                <div className='container-icon-weather'>
                    <img className='icon-weather' src={`https://openweathermap.org/img/w/${dataWeather.weather[0].icon}.png`} alt='icono del clima' />
                </div>
            </div>
            <div className='container-link-about-weather'>
                <hr className='line-about-weather border-blue_secundary' />
                <Link to={`/weather/${dataWeather.name}`}>Ver mas</Link>
            </div>
        </div>
    )
}

export default WeatherCity