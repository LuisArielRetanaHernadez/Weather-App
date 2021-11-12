
// estilos del componente InformationBasicWeather
import '../../styles/WeatherInformation/InformationBasicWeather.style.css'

const InformationBasicWeather = ({dataWeather}) => {

    const t = new Date(dataWeather?.dt * 1000);
    const formatted = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);


    return (
        <div className='information-basic'>
            <div className='container-name-city m-1'>
                <h2 className='name-city'>{dataWeather.name}</h2>
            </div>
            <div className='container-temp m-1'>
                <h2 className='temp-weather m-1'>{(dataWeather?.main?.temp -  273.15).toFixed(2)}°c</h2>
                <img className='icon-weather' src='https://openweathermap.org/img/w/04n.png' alt='icon del clima' />
            </div>
            <div className='container-discription-weather m-1'>
                <p>{dataWeather?.weather[0]?.description}</p>
            </div>
            <div className='container-update-date-weather m-1'>
                <p>Actualizacion de los datos: {formatted}</p>
            </div>
        </div>
    )
}

export default InformationBasicWeather
