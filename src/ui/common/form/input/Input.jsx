import React from 'react'
import s from './Input.module.scss'

const Input = React.memo((props) => {
  const { type, error, name, onChangeText, onFocusInput, ...restProps } = props
  const finalInputClassName = error ? s.errorInput : s.generalInput
  const visibility = !error ? 'visibility' : ''

  const onChangeCallback = (e) => {
    onChangeText(e.currentTarget.value)
  }

  const onClickCloseCallback = (e) => {
    const { nameElem } = e.target.dataset
    onFocusInput(nameElem, true)
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
      <div className={s.closeError} hidden={visibility} data-name={name}>
        <button type='button' onClick={onClickCloseCallback}>
          х
        </button>
      </div>
    </div>
  )
})

export default Input
