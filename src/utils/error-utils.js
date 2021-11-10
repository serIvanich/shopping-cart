
export const formValidator = (name, nameValue, phoneNumberValue, formErrors, setFormErrors) => {
    if (name === 'name') {
        if (!nameValue) {
            setFormErrors({...formErrors, nameError: 'This field in required'})
        } else if (!/^[a-zA-Z]+$/i.test(nameValue)) {
            setFormErrors({...formErrors, nameError: 'Only letters allowed'})
        }
    } else if (name === 'phone') {

        if (!phoneNumberValue) {
            setFormErrors({...formErrors, phoneNumberError: 'This field in required'})
        } else if (!/^[0-9]+$/i.test(phoneNumberValue)) {
            setFormErrors({...formErrors, phoneNumberError: 'Only numbers allowed'})
        } else if (phoneNumberValue.length !== 12) {
            setFormErrors({...formErrors, phoneNumberError: 'Should contain 12 characters'})
        }

    }
}