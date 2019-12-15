import React from 'react'
import styles from './Signup.module.css'
import Input from '../UI/Input/Input'
import Spinner from '../UI/Spinner/Spinner'

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
                    
                    <div className={styles.SignupButton}>
                        <button disabled={props.isSignupDisabled}>
                            {props.loading ? <Spinner /> : 'signup'}</button>
                    </div>
                    {error}

                </form>
            </div>

        </div>


    )
}

export default Signup
