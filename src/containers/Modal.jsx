import ReactDOM from 'react-dom';
import '../styles/Modal.css';

const Modal = ({children}) => {
    return ReactDOM.createPortal(
        <div className='Modal'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;