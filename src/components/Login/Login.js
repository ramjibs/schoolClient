import React from 'react'
import styles from './Login.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import { NavLink } from 'react-router-dom'
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
            <div className={styles.ErrorMessage}>
                <p>{props.error.msg}</p>
            </div>
        )
    }

    return (

        <div className={styles.LoginBox}>
            <div className={styles.LoginForm} >
                <form
                    onSubmit={props.login}>
                    {controls}
                    <div className={styles.ForgotPassword}>
                        <NavLink to='/forgot-password'>Forgot Password ?</NavLink>
                    </div>
                    <Button 
                        buttonType = 'submit'
                        isDisabled = {props.isLoginDisabled }
                        loading = {props.loading}
                        buttonName = 'Login'
                    />
                    
                    {error}

                </form>
                <p style={{
                    'fontSize': 'large',
                    'textAlign': 'center',
                    'color': 'darkgrey'
                }}>Or</p>
                <Button 
                        buttonType = 'standard-reverse'
                        clicked = {props.signUp}
                        buttonName = 'signup'
                    />
                
            </div>

        </div>


    )
}

export default Login
