import React, {useRef} from 'react'
import styles from './Input.module.css'

const Input = (props) => {

    let inputElement = null;

    let dynamicStyles = [styles.InputElement]

    let otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    
    function autoFocusHandler(ref) {
       
        if(otpRefs[ref].current.nextSibling && otpRefs[ref].current.value.trim(' ').length === 1)  {
            otpRefs[ref].current.nextSibling.focus()
        }
    }   

    if (props.touched && !props.valid) {
        dynamicStyles.push(styles.InValidInputElement)
    }
    if(props.animateInput){
        dynamicStyles.push(styles.InputElementAnimie)
       
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
        case 'otp':
            let inputs = [];

            for(let i = 0; i<props.otpLength;i++){
                inputs.push(
                        <input key={i}
                            {...props.controlConfig}
                            value={props.value[i] || ''}
                            ref={otpRefs[i]}
                            onChange={(event)=>{
                                autoFocusHandler(i)
                                props.changed(event, i)}} />
                     
                    )
            }
            inputElement = 
                <div className={styles.Otp}>
                    {inputs}
                </div>
            break;
        case 'textarea':
            inputElement = <div className = {dynamicStyles.join(' ')} >
                <textarea 
                    {...props.controlConfig}
                    value={props.value}
                    onChange={props.changed}
                    />
            </div>
            break;

        default:
            inputElement = <div className={styles.InputElement}>
                <input />
            </div>
            break;
    }

    return (
        <div className={styles.FormField}>
            <label className={props.animateLabel ? styles.LabelAnimie: ''}>{props.label}</label>
            {inputElement}
            <div className={styles.ErrorMessage}>
                <p> {props.errorMessage}</p>
            </div>
        </div>
    )
}

export default Input
