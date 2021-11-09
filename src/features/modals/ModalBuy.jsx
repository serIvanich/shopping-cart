import React, {useState} from "react";
import Modal from "../../common/modal/modal";
import {Item} from "../items/item/Item";
import s from "./ModalBuy.module.css";
import Input from "../../common/form/input/Input";
import {formValidator} from "../../utils/error-utils";

export const ModalBuy = ({currentCard: currentItem, show, setShow}) => {
    const [nameValue, setNameValue] = useState('')
    const [phoneNumberValue, setPhoneNumberValue] = useState('')
    const [formErrors, setFormErrors] = useState({nameError: '', phoneNumberError: ''})

    const onBlurInput = (e) => {
        formValidator(e.target.name, nameValue, phoneNumberValue, formErrors, setFormErrors)
    }

    const resetFormError = () => {
        setFormErrors({nameError: '', phoneNumberError: ''})
    }

    const onCloseModal = () => {
        setShow(false)
        resetFormError()
        setNameValue('')
        setPhoneNumberValue('')
    }

    const onFocusInput = (name) => {
        if (name === 'name') {
            if (formErrors.nameError) {
                setFormErrors({...formErrors, nameError: ''})
                setNameValue('')
            }

        } else if (name === 'phone') {
            if (formErrors.phoneNumberError) {
                setFormErrors({...formErrors, phoneNumberError: ''})
                setPhoneNumberValue('')
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (formErrors.nameError || formErrors.phoneNumberError) {
            return
        }

        let valueForm = `name: ${nameValue}  tel: ${phoneNumberValue}`
        console.log(valueForm)
    }
    return (
        <div>
            <Modal
                enableBackground={true}
                closeModalOnClick={onCloseModal}
                width={384}
                height={536}
                show={show}
            >
                <div className={s.settingModal}>
                    <Item item={currentItem} isModalItems={true}/>
                    <form className={s.settingModalForm} onSubmit={onSubmit}>
                        <div className={s.inputBox}>
                            <Input name={'name'} value={nameValue} type={'text'}
                                   onBlur={onBlurInput} error={formErrors.nameError}
                                   onChangeText={setNameValue} placeholder={'Name'}
                                   onFocusInput={onFocusInput}
                                   className={s.classNameInput}
                            />
                            <Input name={'phone'} value={phoneNumberValue} type={'text'}
                                   onBlur={onBlurInput} error={formErrors.phoneNumberError}
                                   onChangeText={setPhoneNumberValue} placeholder={'Number'}
                                   onFocusInput={onFocusInput}
                                   className={s.classNameInput}
                            />
                        </div>
                        <button className={s.buttonFormSubmit} type={'submit'}>order</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}