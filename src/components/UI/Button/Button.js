import React from 'react'
import styles from './Button.module.css'
import Spinner from '../Spinner/Spinner'

const Button = (props) => {

    let ButtonElement = null;


    switch (props.buttonType) {
        case 'standard':
            ButtonElement = <div className={styles.ButtonStandard}>
                <button disabled={props.isDisabled} onClick={props.clicked}>
                    {props.loading ? <Spinner /> : props.buttonName}</button>

            </div>
            break;
        case 'standard-reverse':
            ButtonElement = <div className={styles.ButtonStandardReverse}>
                <button disabled={props.isDisabled} onClick={props.clicked}>
                    {props.loading ? <Spinner /> : props.buttonName}</button>
            </div>
            break;
        case 'submit':

            ButtonElement = <div className={styles.ButtonSubmit}>
                <button disabled={props.isDisabled} >
                    {props.loading ? <Spinner /> : props.buttonName}</button>
            </div>
            break;
        case 'add':
            ButtonElement = <div className={styles.ButtonAdd}>
                <button disabled={props.isDisabled} onClick={props.clicked}>
                    {props.loading ? <Spinner /> : props.buttonName}</button>
            </div>
            break;

        default:
            ButtonElement = <div className={styles.ButtonStandard}>
                <button disabled={props.isDisabled} onClick={props.clicked}>
                    {props.loading ? <Spinner /> : props.buttonName}</button>
            </div>
            break;
    }

    return ButtonElement
}

export default Button
