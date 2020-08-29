import React, { useRef } from 'react'
import styles from './Input.module.css'
import MultipleSelect from './MultipleSelect/MultipleSelect'

const Input = (props) => {

    let inputElement = null;

    let dynamicStyles = [styles.InputElement]

    let otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];


    function autoFocusHandler(ref) {

        if (otpRefs[ref].current.nextSibling && otpRefs[ref].current.value.trim(' ').length === 1) {
            otpRefs[ref].current.nextSibling.focus()
        }
    }

    if (props.touched && !props.valid) {
        dynamicStyles.push(styles.InValidInputElement)
    }
   



    switch (props.controlType) {
        case 'input':
            inputElement = <div className={dynamicStyles.join(' ')}>
                <input
                    {...props.controlConfig}
                    value={props.value}
                    onChange={props.changed} />
            </div>
            break;

        case 'select':

            inputElement = <div className={dynamicStyles.join(' ')}>
                <select
                    onChange={props.changed}
                    id={props.controlConfig.id}
                    disabled={props.controlConfig.disabled}
                    name={props.controlConfig.name}
                    value={props.value || props.controlConfig.default}
                >
                    <option value={props.controlConfig.default} disabled>{props.controlConfig.defaultValue}</option>
                    {props.options != null ? props.options.map(option => {
                        return <option
                            value={option.value}
                            key={option.id}>
                            {option.value}
                        </option>
                    }) : null}
                </select>
            </div>

            break;

        case 'suggest-input':

            inputElement = <div className={dynamicStyles.join(' ')}>
                <input

                    {...props.controlConfig}
                    value={props.value}
                    onChange={props.changed}

                />
                <datalist id={props.controlConfig.list}>
                    {props.options != null ? props.options.map(option => {
                        return <option value={option.value}>{option.value}</option>
                    }) : null}
                </datalist>
            </div>

            break;
        case 'otp':
            let inputs = [];
            dynamicStyles.push(styles.OtpBox)
            for (let i = 0; i < props.otpLength; i++) {
                inputs.push(
                    <input key={i}
                        
                        {...props.controlConfig}
                        value={props.value[i] || ''}
                        ref={otpRefs[i]}
                        onChange={(event) => {
                            autoFocusHandler(i)
                            props.changed(event, i)
                        }} />

                )
            }
            inputElement =
                <div className={dynamicStyles.join(' ')}>
                    {inputs}
                </div>
            break;
        case 'textarea':
            inputElement = <div className={dynamicStyles.join(' ')} >
                <textarea
                    
                    {...props.controlConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            </div>
            break;
        case 'date':
            inputElement = <div className={dynamicStyles.join(' ')} >
                <input
                    {...props.controlConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            </div>
            break;

        case 'radio':

            let radioButtons = []

            for (let index = 0; index < props.radioButtons.length; index++) {
                let element = props.radioButtons[index];

                let radioButton = (
                    <div key={element.id}>
                        <input
                            {...element}
                            onChange={props.changed} />
                        <label htmlFor={element.id}>{element.radiolabel}</label>
                    </div>


                )
                radioButtons.push(radioButton)


            }

            inputElement = <div className={styles.RadioElement}>
                {radioButtons}
            </div>
            break;

        case 'checkbox':

            inputElement = <div className={styles.CheckboxElement} >
                <input  {...props.controlConfig}
                    onChange={props.changed}
                    
                />
                <label
               
                 htmlFor={props.controlConfig.id}>{props.label}</label>
            </div>

            break;

        case 'select-multiple':

            inputElement = <MultipleSelect
                controlConfig={props.controlConfig}
                value={props.value}
                valid={props.valid}
                touched={props.touched}
                items={props.options}
                valueChanged={props.changed}
            />
            break;

        default:
            inputElement = <div className={styles.InputElement}>
                <input />
            </div>
            break;
    }

    return (
        <div>
            {props.notRequiredLabel ? <div className={styles.LabelNotRequired}></div> :
                (<div className={styles.Label}>
                    <label
                        htmlFor={props.controlConfig.id}
                    >{props.label}</label></div>
                )}

            {inputElement}
            <div className={styles.ErrorMessage}>
                <p> {props.errorMessage}</p>
            </div>
        </div>
    )
}

export default Input
