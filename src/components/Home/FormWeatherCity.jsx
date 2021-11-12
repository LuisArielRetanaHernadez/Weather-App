import { useState } from 'react';

// estilos del componente FormWeatherCountry
import '../../styles/Home/FormWeatherCity.style.css'

const formInitin = {
    nameCity: '',
}

const FormWeatherCity = ({submitNameCity}) => {

    const [form, setForm] = useState(formInitin) //guardamos los datos del form

    const heandlChangue = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const heandlSubmit = e =>{
        e.preventDefault();
    
        submitNameCity(form)
        setForm(formInitin)
    }

    return (
        <div className='container-form-weather-city'>
            <form className='container-form-weather' onSubmit={heandlSubmit}>
                <div className='component-form-weather'>
                    <input className='input-search-weather' type='text' name='nameCity' value={form.nameCity} onChange={heandlChangue}/>
                    <button className='btn-search-weather'>buscar</button>
                </div>
            </form>
        </div>
    )
}

export default FormWeatherCity