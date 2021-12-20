import React from 'react';
import s from './Modal.module.scss'


const Modal = React.memo(({
                               closeModalOnClick,  show, children,
                          }) => {

    if (!show) return null;

    return (

        <div className={s.modalContainer}>
            <div className={s.modalBox}>
                {children}
                <div className={s.closeButton}
                     onClick={closeModalOnClick}>
                    x
                </div>
            </div>
        </div>

    )
})

export default Modal;

