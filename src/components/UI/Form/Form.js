import React from 'react'
import styles from './Form.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Form = (props) => {


    let controls = props.controls.map(object => {

        if (props.ignoreSpecialControls) {

            if (!props.specialControls.includes(object.id)) {
                return <Input
                    key={object.id}
                    controlType={object.control.controlType}
                    controlConfig={object.control.controlConfig}
                    radioButtons={object.control.buttons}
                    notRequiredLabel={object.control.notRequiredLabel}
                    label={object.control.label}
                    value={object.control.value}
                    valid={object.control.valid}
                    errorMessage={object.control.errorMessage}
                    touched={object.control.touched}
                    options={object.control.options}
                    changed={(event, i) => props.newEntryFromUser(event, object.id, i)}

                />
            }
            else {
                return null
            }
        }
        else {
            return <Input
                key={object.id}
                controlType={object.control.controlType}
                controlConfig={object.control.controlConfig}
                radioButtons={object.control.buttons}
                notRequiredLabel={object.control.notRequiredLabel}
                label={object.control.label}
                value={object.control.value}
                valid={object.control.valid}
                errorMessage={object.control.errorMessage}
                touched={object.control.touched}
                options={object.control.options}
                changed={(event) => props.newEntryFromUser(event, object.id)}


            />

        }
    })

    let specialControls = []

    for (let index = 0; index < props.specialControls.length; index++) {
        let inputs = [];
        let count
        let margin
        let controlDesign = (
            <fieldset key={index + props.specialControlsHeading[index]}>
                <legend>{props.specialControlsHeading[index]}</legend>
                {props.controls.forEach(elements => {
                    if (elements.id === props.specialControls[index]) {
                        for (let element in elements.control) {
                            count = <div key={element + elements.id} className={styles.SpecialControls}>
                                <label className={styles.SpecialControlsCount}>{parseInt(element) + 1}.</label>
                                {parseInt(element + 1) > 1 ? <Button
                                    buttonType='delete'
                                    clicked={(event) => props.deleteControl(event, props.specialControls[index], parseInt(element))}
                                    buttonName={'Delete ' + props.specialControlsHeading[index]}
                                /> : null}

                            </div>
                            inputs.push(count)
                            let inputControlsArr = []
                            let inputControls = null
                            let objects = elements.control[element]
                            for (let object in objects) {
                                let input = <Input
                                    key={index + elements.id + objects[object].controlConfig.id + element}
                                    controlType={objects[object].controlType}
                                    controlConfig={objects[object].controlConfig}
                                    radioButtons={objects[object].buttons}
                                    label={objects[object].label}
                                    notRequiredLabel={objects[object].notRequiredLabel}
                                    value={objects[object].value}
                                    valid={objects[object].valid}
                                    errorMessage={objects[object].errorMessage}
                                    touched={objects[object].touched}
                                    options={objects[object].options}
                                    changed={(event,) => props.newEntryFromUser(event, props.specialControls[index], parseInt(element), objects[object].controlConfig.name)}
                                />
                                inputControlsArr.push(input)
                            }
                            inputControls = <div
                                key={element + elements.id + element + element.id}
                                className={styles.FormSpecialControls}>
                                {inputControlsArr}
                            </div>
                            inputs.push(inputControls)
                            margin = <div key={element + elements.id + element} className={styles.SpecialControlsMargin}></div>
                            inputs.push(margin)

                        }



                    }

                })}
                {inputs}

                <Button
                    isDisabled={props.buttonDisabledStatus[index].isDisabled}
                    buttonType='add'
                    clicked={(event) => props.addMoreControls(event, props.specialControls[index])}
                    buttonName={'Add ' + props.specialControlsHeading[index]}
                />

            </fieldset>

        )
        specialControls.push(controlDesign)

    }

    return (
        <form
            className={styles.Form}
            onSubmit={props.submitForm}>
            <h5 className={styles.FormTitle}>{props.formTitle}</h5>
            <fieldset>
                <legend>Basic Info</legend>
                <div className={styles.FormControls}>
                    {controls}
                </div>
            </fieldset>


            {specialControls}

            <div className={styles.FormSubmission}>
                <Button
                    buttonType='submit'
                    isDisabled={!props.isFormSubmitDisabled}
                    loading={props.loading}
                    buttonName={'Add ' + props.formSubmitButtonName}
                    errorBoxRequired
                    errorMessage={props.errorSubmitForm}
                />
                <Button
                    buttonType='cancel'
                    buttonName={'Cancel'}
                />

            </div>



        </form>
    )
}

export default Form
