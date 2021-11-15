// hooks react
import { useEffect } from "react"
import { useState } from "react"

// componentes la vista Home
import FormWeatherCity from "../components/Home/FormWeatherCity"

// componentes
import Loader from "../components/Loader"
import WeatherCity from "../components/WeatherCity"
import Message from "../components/Message"

import { helpHttp } from "../helper/helpHttp"

import "../styles/views/Home.style.css"

const Home = () => {

    const [nameCity, setNameCity] = useState({nameCity: 'Mexico'})
    const [dataWeather, setDataWeather] = useState({})
    const [err, setErr] = useState({})
    const [loaderState, setLoaderState] = useState(false)

    useEffect(() => {
        const api = helpHttp()
        if(nameCity){
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity.nameCity}&appid=8ca1e3c1a89eceaa54ef9373f9207490&lang=es`
            setLoaderState(true)
            setDataWeather({})
            setErr({})
            api.get(url).then(response => {
                if(response.err){
                    setErr(response)
                    setDataWeather({})
                }else{
                    setErr({})
                    setDataWeather(response)
                }
                setLoaderState(false)
            })
        }
    },[nameCity])
    console.log(err)
    return (
        <div className='container-home w-full'>
            <FormWeatherCity submitNameCity={setNameCity}/>
            { err?.err && <Message status={err.status} statusText={err.statusText} err={err.err} /> }
            { loaderState && <Loader />}
            { !loaderState && Object.keys(dataWeather).length > 0 && <WeatherCity dataWeather={dataWeather} />}
        </div>
    )
}

export default Home