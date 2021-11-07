import React from "react";
import Modal from "../../common/modal/modal";
import {Card} from "../cards/card/Card";
import s from './ModalBuy.module.css'
import {useFormik} from "formik";


export const ModalBuy = ({currentCard, show, setShow}) => {


    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',

        },
        validate: (values) => {
            const errors = {};
            if (!values.name) {
                errors.name = 'This field in required';
            } else if (!/[a-z]/i.test(values.name)) {
                errors.name = 'Only letters allowed';
            }

            if (!values.phoneNumber) {
                errors.phoneNumber = 'This field in required';
            } else if (!/\d/i.test(values.phoneNumber)) {
                errors.phoneNumber = 'Only numbers allowed';
            } else if (values.phoneNumber.length !== 12) {
                errors.phoneNumber = 'Should contain 12 characters';
            }

            return errors;
        },
        onSubmit: values => {
            const {name, phoneNumber} = values
            console.log(`Name: ${name} tel ${phoneNumber}`)
            formik.resetForm()
        },
    })


    return (
        <div>
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}
                width={384}
                height={536}
                show={show}
            >

                <div className={s.settingModals}>
                    <Card card={currentCard} modalCard={true}/>
                    <form onSubmit={formik.handleSubmit} className={s.settingModalsForm}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                {...formik.getFieldProps('name')}  />
                            <div style={{'color': 'red', 'height': '10px'}}>
                                {formik.touched.name && formik.errors.name && formik.errors.name}
                            </div>

                        </div>
                        <div>
                            <label htmlFor='phoneNumber'>phoneNumber</label>
                            <input
                                type='phoneNumber'
                                {...formik.getFieldProps('phoneNumber')}
                            />
                            <div style={{'color': 'red', 'height': '10px'}}>
                                {formik.touched.phoneNumber && formik.errors.phoneNumber && formik.errors.phoneNumber}
                            </div>
                        </div>
                        <button type={'submit'}>order</button>
                    </form>

                </div>

            </Modal>


        </div>
    )
}