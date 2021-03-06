import React from 'react'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import styles from './forgotPassword.module.css'
const ForgotPassword = props => {

    let controls = props.controls.map(object => {

        if (object.id !== 'userId') {
            return <Input
                key={object.id}
                controlType={object.control.controlType}
                controlConfig={object.control.controlConfig}
                label={object.control.label}
                value={object.control.value}
                valid={object.control.valid}
                errorMessage={object.control.errorMessage}
                touched={object.control.touched}
                changed={(event, i) => props.changed(event, object.id, i)}
                otpLength={object.control.otpLength} />
        }
        else {
            return null
        }

    })

    let error = null

    if (props.error) {
        error = (
            <div className={styles.ErrorMessage}>
                <p>{props.error}</p>
            </div>
        )
    }

    let userId = <Input
        controlType={props.controls[0].control.controlType}
        controlConfig={props.controls[0].control.controlConfig}
        label={props.controls[0].control.label}
        value={props.controls[0].control.value}
        valid={props.controls[0].control.valid}
        errorMessage={props.controls[0].control.errorMessage}
        touched={props.controls[0].control.touched}
        changed={(event) => props.changed(event, "userId")}
    />

    let showPassAndOtp = null

    if (props.showPassAndOtp) {
        showPassAndOtp = <>
            <p className={styles.OptMessage}>
                {props.otpMessage}
            </p>
            {controls}
            <Button
                buttonType='standard'
                isDisabled={props.isChangePasswordnDisabled}
                clicked={props.changePassword}
                loading={props.loadingChangePass}
                errorBoxRequired
                errorMessage={props.errorChangePass}
                buttonName='Change Password'
            />
        </>
    }

    return (

        <div className={styles.ForgotPasswordBox}>
            <form className={styles.InputFormFileds}>
                {userId}
                <Button
                    buttonType='standard'
                    isDisabled={props.otpButtondisabled}
                    clicked={props.sendOtpClicked}
                    loading={props.loadingOtpRequest}
                    buttonName={props.otpButtonName}

                />
                {error}
                {showPassAndOtp}
            </form>
        </div>
    )
}


export default ForgotPassword
