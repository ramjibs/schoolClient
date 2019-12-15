import React from 'react'
import Spinner from '../UI/Spinner/Spinner'
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

    })

    let error = null
    let errorChangePass = null

    if (props.error) {
        error = (
            <div className={styles.ErrorMessage}>
                <p>{props.error}</p>
            </div>
        )
    }

    if(props.errorChangePass){
        errorChangePass = (
            <div className={styles.ErrorMessage}>
            <p>{props.errorChangePass}</p>
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
            <p style={{
                'fontSize': 'medium',
                'color': 'darkgrey'
            }}
            >{props.otpMessage}</p>
            {controls}

            <div className={styles.ForgotPasswordButton}>
                <button disabled={props.isChangePasswordnDisabled} onClick={props.changePassword}>
                    {props.loadingChangePass ? <Spinner /> : 'Change Password'}</button>
            </div>
            {errorChangePass} </>
    }

    return (

        <div className={styles.ForgotPassword}>
            <div className={styles.ForgotPasswrodForm} >
                <form>
                    {userId}
                    <div className={styles.ForgotPasswordButton}>
                        <button disabled={props.otpButtondisabled} onClick={props.sendOtpClicked}>
                            {props.loadingOtpRequest ? <Spinner /> : props.otpButtonName}</button>
                    </div>
                    {error}

                    {showPassAndOtp}


                </form>
            </div>
        </div>
    )
}


export default ForgotPassword
