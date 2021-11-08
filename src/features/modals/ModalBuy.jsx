import React, {useState} from "react";
import Modal from "../../common/modal/modal";
import {Card} from "../cards/card/Card";
import s from "./ModalBuy.module.css";
import MyInput from "../../common/form/input/MyInput";

export const ModalBuy = ({currentCard, show, setShow}) => {
    const [userName, setUserName] = useState('')
    const [userPhoneNumber, setUserPhoneNumber] = useState('')
    const [formError, setFormError] = useState(null)

    const onClickModalCallback = () => {
        setShow(false)
    }

    const onBlurInput = (e) => {

        if (e.target.name === 'name') {
            if (!userName) {
                setFormError('This field in required')
            } else if (!/^[a-zA-Z]+$/i.test(userName)) {
                setFormError('Only letters allowed')
            }
        } else if (e.target.name === 'phone') {
            if (!userPhoneNumber) {
                setFormError('This field in required')
            } else if (userPhoneNumber.length !== 12) {
                setFormError('Should contain 12 characters')
            } else if (!/^[0-9]+$/i.test(userPhoneNumber)) {
                setFormError('Only numbers allowed')
            }
        }
    }
    const resetFormError = () => {
        if (formError !== null) {
            setFormError(null)
        }
    }
    const onSubmit = () => {

        let res = userName + userPhoneNumber

    }
    return (
        <div>
            <Modal
                enableBackground={true}
                closeModalOnClick={onClickModalCallback}
                width={384}
                height={536}
                show={show}

            >
                <div className={s.settingModals}>
                    <Card card={currentCard} modalCard={true}/>
                    <form onSubmit={onSubmit}>
                        <MyInput name={'name'} value={userName} type={'text'}
                                 onBlur={onBlurInput} error={formError}
                                 onChangeText={setUserName} placeholder={'Name'}
                                 onFocus={resetFormError}
                        />
                        <MyInput name={'phone'} value={userPhoneNumber} type={'text'}
                                 onBlur={onBlurInput} error={formError}
                                 onChangeText={setUserPhoneNumber} placeholder={'Number'}
                                 onFocus={resetFormError}
                        />
                        <button type={'submit'}>order</button>
                    </form>
                </div>


            </Modal>


        </div>
    )

}