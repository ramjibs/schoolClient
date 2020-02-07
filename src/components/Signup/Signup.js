import React from 'react'
import styles from './Signup.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
const Signup = (props) => {


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
                <p>{props.error}</p>
            </div>
        )
    }

    return (

        <div className={styles.Signup}>
            <div className={styles.SignupForm} >
                <form
                    onSubmit={props.signup}>
                    {controls}
                    <Button 
                        buttonType = 'submit'
                        isDisabled = {props.isSignupDisabled}
                        loading = { props.loading }
                        buttonName = 'signup'
                    />
                    
                    {error}

                </form>
            </div>

        </div>


    )
}

export default Signup
