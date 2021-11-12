// hooks react
import { useEffect, useState } from 'react';

// react-router-dom
import { useParams } from "react-router"

// componentes de la vista WeatherInformation
import DetailsWeather from "../components/WeatherInformation/DetailsWeather"
import InformationBasicWeather from "../components/WeatherInformation/InformationBasicWeather"

// estilos de la vista WeatherInformation
import '../styles/views/WeatherInformation.style.css'

// helper
import { helpHttp } from '../helper/helpHttp';

const WeatherInformation = () => {

    const [dataWeather, setDataWeather] = useState({})
    const [err, serErr] = useState(null)

    const data = useParams()

    useEffect(() => {

        const api = helpHttp()
        console.log(data)

        if(data){
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${data?.name}&appid=8ca1e3c1a89eceaa54ef9373f9207490&lang=es`

            api.get(url).then(response => {
                if(response.err){
                    serErr(response)
                    setDataWeather([])
                }else{
                    setDataWeather(response)
                    serErr(null)
                }
            })
    
        }

    },[data])
    console.log(dataWeather)
    return (
        <div className='container-weather-information'>
            {err}
            {Object.keys(dataWeather).length > 0 ? 
            <div className='container-information'>
                <InformationBasicWeather dataWeather={dataWeather} />
            </div> : null}
            {Object.keys(dataWeather).length > 0 ? 
            <div className='container-details'>
                <DetailsWeather dataWeather={dataWeather} />
            </div> : null}
        </div>
    )
}
export default WeatherInformation