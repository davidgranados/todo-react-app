import ReactDOM from 'react-dom'

import styles from './modal.module.css'

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={styles['modal-background']}>{children}</div>,
    document.getElementById('modal')
  )
}

export default Modal
