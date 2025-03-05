import ReactDom from 'react-dom'
import '../styles/Modal.css'

export function Modal({children}) {
    return ReactDom.createPortal(
        <div className='ModalStyle'>
            {children}
        </div>,
        document.getElementById('modal')
    )
}