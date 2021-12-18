import React from 'react'
import s from './Input.module.css'

const Input = React.memo(({type, error, name,  onChangeText,
                    onFocusInput, ...restProps}) => {


    const finalInputClassName = error ? s.errorInput : s.generalInput
    const visibility = !error ? 'visibility' : ''


    const onChangeCallback = (e) => {
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const onClickCloseCallback = (e) => {

        const name = e.target.dataset.name
        onFocusInput(name, true)
    }

    const onFocusCallback = (e) => {
        onFocusInput(e.target.name)
    }

    return (
        <div className={s.inputContainer}>
            <input
                type={type}
                name={name}
                onChange={onChangeCallback}
                className={finalInputClassName}
                onFocus={onFocusCallback}
                {...restProps}
            />
            <small className={s.textError} hidden={visibility}>
                {error}
            </small>
            <div className={s.closeError} onClick={onClickCloseCallback}
                 hidden={visibility} data-name={name}>х</div>

        </div>
    )
})

export default Input
