import React from 'react'
import s from './Input.module.css'


const Input = (
    {
        type, error, name, className,
        onChangeText, errorTextClassName, onFocusInput,
        ...restProps
    }
) => {

    const onChangeCallback = (e) => {
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onClickCloseCallback = (e) => {
        const name = e.target.previousElementSibling.previousElementSibling.name
        onFocusInput(name)
    }

    const onFocusCallback = (e) => {
        onFocusInput(e.target.name)
    }

    const finalErrorTextClassName = `${s.textError} ${errorTextClassName ? errorTextClassName : ''}`
    const finalInputClassName = `${error ? s.errorInput : s.generalInput} ${className} `
    const visibility = `${error ? 'visibility' : 'hidden'}`
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

            <small className={finalErrorTextClassName} style={visibility==='visibility'? {zIndex: '20'}: {}}>
                {error}
            </small>
            <div className={s.closeError} onClick={onClickCloseCallback} style={visibility==='visibility'? {zIndex: '20'}: {}}>х</div>

        </div>
    )
}

export default Input
