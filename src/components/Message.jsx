
// hooks react
import { useRef } from 'react'

// estilos del componente Message
import '../styles/Message.style.css'

const Message = ({status, statusText, err}) => {

    const messageComponent = useRef(null)

    const hideMessageComponent = () => { messageComponent.current.classList.add('slide-alert-hide');  }
    // messageComponent.current.classList.add = 'slide-alert-hide';
    // useEffect(() => {
    //     if(messageComponent.current != null && err){
    //         // messageComponent.current.classList.add = '';
    //         console.log(messageComponent.current.classList)
    //     }
    //     return err
    // },[err])

    return (
        <div className='container-message' ref={messageComponent} onClick={hideMessageComponent}>
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