import React from 'react';

export const ErrorSnackbar = React.memo(({error}) => {
    const styleSnackbar = {
        padding: '5vh',
        position: 'absolute',
        top: '40vh',
        left: '40vw',
        border: '3px solid red',
        borderRadius: '15px',
        color: 'red',
        fontSize: '26px',
    }

    return (
        <div style={styleSnackbar}>
            {error}
        </div>
    )
})
