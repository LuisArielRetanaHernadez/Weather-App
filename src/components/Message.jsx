
// hooks react
import { useRef, useEffect } from 'react'

// estilos del componente Message
import '../styles/Message.style.css'

const Message = ({status, statusText, err}) => {

    const messageComponent = useRef(null)

    const hideMessageComponent = () => { 
        const idMessage = messageComponent
        console.log(idMessage)
        messageComponent.current.className = 'slide-alert-hide';
    }
    // messageComponent.current.classList.add = 'slide-alert-hide';
    useEffect(() => {
        if(messageComponent.current != null && err){
            messageComponent.current.className = 'container-message';
            console.log(messageComponent.current.classList)
        }
        return err
    },[err])

    return (
        <div id='id-message' className='container-message' ref={messageComponent} onClick={hideMessageComponent}>
            <div className='status-message'>
               <h3>{status} {statusText}</h3>
            </div>
            <div className='text-message'>
                <p>lo sentimos, al parecer no encontramos ningun pais con ese nombre</p>
            </div>
        </div>
    )
}
export default Message