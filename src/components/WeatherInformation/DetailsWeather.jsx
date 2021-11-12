
// estilos del componente DetailsWeather
import '../../styles/WeatherInformation/DetailsWeather.style.css'

const DetailsWeather = ({dataWeather}) => {

    return (
        <div className='container-details-weather'>
            <hr className='line-weather border-2 border-blue-900 rounded absolute bottom-full' />
            <ul className='list-details-weather'>
                <ul className='list-1-details-weather bg-transparent'>
                    <li className='item-details-weather'>velocidad del viento: {dataWeather?.wind?.speed} m/s</li>
                    <li className='item-details-weather'>direccion del viento: {dataWeather?.wind?.deg} deg</li>
                    <li className='item-details-weather'>Rafaga de viento: {dataWeather?.wind?.gust} m/s</li>
                </ul>
                <ul className='list-1-details-weather bg-transparent'>
                    <li className='item-details-weather'>Humedad: {dataWeather?.main?.humidity}%</li>
                    <li className='item-details-weather'>Nubosidad: {dataWeather?.clouds?.all}%</li>
                    <li className='item-details-weather'>Percepcion Humana temperatura: {(dataWeather?.main?.feels_like - 273.15).toFixed(2)}°c</li>
                </ul>
            </ul>
            <ul className='list-details-weather-optional'>
                <li className='item-details-weather'>volumen de la lluvia: 3mm</li>
                <li className='item-details-weather'>valumen de lluvia en 3 hr: 5mm</li>
            </ul>
        </div>
    )
}

export default DetailsWeather