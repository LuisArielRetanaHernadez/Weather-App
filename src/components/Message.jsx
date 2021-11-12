
// estilos del componente Message 
// hooks react
import { useRef } from 'react'

// estilos del componente Message
import '../styles/Message.style.css'

const Message = ({status, statusText, err}) => {

    const messageComponent = useRef()

    const hideMessageComponent = (err) => {
        console.log(messageComponent)
        if(err){
            messageComponent.current.style.display = 'block';
        }else{
            messageComponent.current.style.display = 'none'
        }
    }
    console.log(err)
    return (
        <div className='container-message' ref={messageComponent} onClick={() => hideMessageComponent(false)}>
            {/* { err && hideMessageComponent(true)} */}
            <div className='status-message'>
               <h3>{status} {statusText}</h3>
            </div>
            <div className='text-message'>
                <p>lo sentimos, al parecer no encontramos ningun pais con esa nombre</p>
            </div>
        </div>
    )
}
export default Message