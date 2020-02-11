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
                    label={object.control.label}
                    value={object.control.value}
                    valid={object.control.valid}
                    errorMessage={object.control.errorMessage}
                    touched={object.control.touched}
                    changed={(event, i) => props.changed(event, object.id, i)}
                />
            }
        }
        else {
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
            />

        }
    })

    let specialControls = []

    for (let index = 0; index < props.specialControls.length; index++) {
        let inputs = [];
        let count
        let controlDesign = (
            <div key={index + props.specialControlsHeading[index]}>
                <div >
                    <label>{props.specialControlsHeading[index]}</label> <br /> <br />

                    {props.controls.forEach(elements => {
                        if (elements.id === props.specialControls[index]) {
                            for (let element in elements.control) {
                                count = <div key={element + elements.id} className={styles.SpecialControlCount}>
                                    <label>{parseInt(element) + 1}.</label>
                                    {parseInt(element + 1) > 1 ? <Button
                                        buttonType='delete'
                                        clicked={(event) => props.deleteControl(event, props.specialControls[index], parseInt(element))}
                                        buttonName={'Delete ' + props.specialControlsHeading[index]}
                                    /> : null}
                                    
                                </div>
                                inputs.push(count)
                                let objects = elements.control[element]
                                for (let object in objects) {
                                    let input = <Input
                                        key={index + elements.id + objects[object].controlConfig.id + element}
                                        controlType={objects[object].controlType}
                                        controlConfig={objects[object].controlConfig}
                                        label={objects[object].label}
                                        value={objects[object].value}
                                        valid={objects[object].valid}
                                        errorMessage={objects[object].errorMessage}
                                        touched={objects[object].touched}
                                        changed={(event, i) => props.changed(event, objects[object].id, i)}
                                    />

                                    inputs.push(input)
                                }


                            }

                        }

                    })}

                    {inputs}



                </div>
                <Button
                    buttonType='add'
                    clicked={(event) => props.addMoreControls(event, props.specialControls[index])}
                    buttonName={'Add ' + props.specialControlsHeading[index]}
                />

            </div>

        )
        specialControls.push(controlDesign)



    }

    return (
        <form
            className={styles.Form}
            onSubmit={props.addTeacher}>
            <h2 style={{
                'fontFamily': 'cursive',
                'color': ' #00cccc'
            }}>{props.formTitle}</h2>
            {controls}
            {specialControls}

            <Button
                buttonType='submit'
                isDisabled={props.isFormSubmitDisabled}
                loading={props.loading}
                buttonName='Add Teacher'
            />

        </form>
    )
}

export default Form
