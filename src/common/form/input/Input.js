import React from 'react'
import s from './Input.module.css'

const Input = React.memo(({type, error, name, className, onChangeText,
                   errorTextClassName, onFocusInput, ...restProps}) => {

    const finalErrorTextClassName = `${s.textError} ${errorTextClassName ? errorTextClassName : ''}`
    const finalInputClassName = `${error ? s.errorInput : s.generalInput} ${className} `
    const visibility = `${error ? 'visibility' : 'hidden'}`
    const visibilityStyle = visibility === 'visibility' ? {zIndex: '20'} : null

    const onChangeCallback = (e) => {
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const onClickCloseCallback = (e) => {
        const name = e.target.previousElementSibling.previousElementSibling.name
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
            <small className={finalErrorTextClassName} style={visibilityStyle}>
                {error}
            </small>
            <div className={s.closeError} onClick={onClickCloseCallback} style={visibilityStyle}>х</div>

        </div>
    )
})

export default Input
