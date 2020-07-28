import React from 'react'
import styles from './Login.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'
const Login = (props) => {


    let controls = props.controls.map(object => (
        <Input
            key={object.id}
            controlType={object.control.controlType}
            controlConfig={object.control.controlConfig}
            label={object.control.label}
            value={object.control.value}
            valid={object.control.valid}
            errorMessage={object.control.errorMessage}
            touched={object.control.touched}
            animateInput={object.control.animateInput}
            animateLabel={object.control.animateLabel}
            changed={(event) => props.changed(event, object.id)} />
    ))

    let error = null

    if (props.error) {
        error = (
            <p className={styles.ErrorMessage}>{props.error.msg}</p>
        )
    }

    return (

        <div className={styles.LoginBox}>
            <form
                className={styles.InputFormFileds}
                onSubmit={props.login}>
                {controls}
                <Button
                    buttonType='submit'
                    isDisabled={props.isLoginDisabled}
                    loading={props.loading}
                    errorBoxRequired
                    errorMessage={props.error? props.error.msg : ''}
                    buttonName='Login'

                />
            </form>
            {/* {error} */}
            <Link
                className={styles.ForgotPassword}
                to='/forgot-password'>Forgot Password ?</Link>
        </div>


    )
}

export default Login
