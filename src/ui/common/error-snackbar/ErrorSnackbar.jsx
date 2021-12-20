import React from 'react';
import s from './ErrorSnackbar.module.scss'

export const ErrorSnackbar = React.memo(({error}) => {

    return (
        <div className={s.styleSnackbar}>
            {error}
        </div>
    )
})
