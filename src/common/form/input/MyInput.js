import React from 'react'
import s from './MyInput.module.css'


const MyInput = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        resetError,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const onChangeCallback = (e) => {
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyPressCallback = (e) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    const finalErrorTextClassName = `${s.textError} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${error ? s.errorInput : s.superInput} ${className} `
    const visibility = `${error ? 'visibility' : 'hidden'}`
    return (
        <div className={s.inputContainer}>
            <input
                type={type}
                name={restProps.name}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                onFocus={resetError}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />

            <small className={finalErrorTextClassName} style={visibility==='visibility'? {zIndex: '20'}: {}}>
                {error}
            </small>
            <div className={s.closeError} onClick={resetError} style={visibility==='visibility'? {zIndex: '20'}: {}}>х</div>

        </div>
    )
}

export default MyInput
