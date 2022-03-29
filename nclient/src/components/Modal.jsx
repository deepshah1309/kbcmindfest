import { ReactNode } from 'react';
import style from './Modal.module.css';


const Modal = ({ children, onClose }) => {
    return (
        <div className={style.Modal}>
            <div className={style.Box}>
                <div className={style.close} onClick={() => {onClose()}}>close</div>
                { children }
            </div>
        </div>
    );
};

export default Modal;