// react-router-dom
import { Link } from "react-router-dom"

// estilos del componente Menu
import '../styles/layout/Menu.style.css'

const Menu = ({children}) => {

    return (
        <div className=' w-screen h-screen'>
            <div className='container-menu bg-blue_secundary w-full '>
                <nav className='nav-menu w-full h-full'>
                    <ul className='list-menu w-1/2 h-full'>
                        <li className='item-menu logo-menu'>
                            <Link to='/'><h3>WeatherApp</h3></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        {children}
        </div> 
    )
}

export default Menu