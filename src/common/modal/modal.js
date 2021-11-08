import React from "react";

const Modal = (
    {
        enableBackground,
        backgroundStyle,
        closeModalOnClick = () => {
        },

        width,
        height,
        modalStyle,
        modalOnClick = () => {
        },

        show,
        children,
    }
) => {
    const top = `calc(50vh - ${height / 2}px)`;
    const left = `calc(50vw - ${width / 2}px)`;
    const closeRight = `${parseInt(left) + 10} + px`
    const closeTop = `${parseInt(top) + 10} + px`

    if (!show) return null;

    return (
        <>
            {enableBackground && <div
                style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    width: '100vw',
                    height: '100vh',
                    background: 'black',
                    opacity: 0.35,
                    zIndex: 20,

                    ...backgroundStyle,
                }}

            />}
            <div
                style={{
                    position: 'fixed',
                    top,
                    left,
                    width,
                    height,
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // padding: 20,
                    borderRadius: '24px',
                    background: '#FFFFFF',
                    zIndex: 21,

                    ...modalStyle,
                }}
                onClick={modalOnClick}
            >
                {children}
                <div
                    style={{
                        width: '30px',
                        height: '30px',
                        position: 'absolute',
                        right: '-10px',
                        top: '-10px',
                        border: 'solid 1px grey',
                        borderRadius: '50%',
                        textAlign: 'center',
                        fontSize: '20px',
                        backgroundColor: '#FFFFFF',
                        zIndex: 22,
                    }}
                    onClick={closeModalOnClick}>
                    x
                </div>
            </div>
        </>
    );
};

export default Modal;