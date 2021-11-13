
// estilos del componente Message 
// hooks react
import { useRef } from 'react'

// estilos del componente Message
import '../styles/Message.style.css'
import { useEffect } from 'react';

const Message = ({status, statusText, err}) => {

    const messageComponent = useRef(null)

    const hideMessageComponent = () => { messageComponent.current.style.display = 'none' }

    useEffect(() => {
        if(messageComponent.current != null && err){
            messageComponent.current.style.display = 'block';
        }
        return err
    },[err])

    return (
        <div className='container-message' ref={messageComponent} onClick={() => hideMessageComponent()}>
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