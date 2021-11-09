import React from "react";

const Modal = (
    {
        enableBackground,
        backgroundStyle,
        closeModalOnClick ,
        width,
        height,
        show,
        children,
    }
) => {
    const top = `calc(50vh - ${height / 2}px)`;
    const left = `calc(50vw - ${width / 2}px)`;

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
                    borderRadius: '24px',
                    background: '#FFFFFF',
                    zIndex: 21,

                }}
            >
                {children}
                <div
                    style={{
                        width: '30px',
                        height: '30px',
                        position: 'absolute',
                        right: '-10px',
                        top: '-10px',
                        borderRadius: '50%',
                        textAlign: 'center',
                        fontSize: '20px',
                        backgroundColor: '#F2F2F2',
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