import React from 'react'
import styles from './AddTeacher.module.css'
import Form from '../../UI/Form/Form'


const addTeacher = (props) => {

    
    
    return (
        <div className={styles.AddTeacher}>
            <Form
                formTitle={props.formTitle}
                controls = {props.controls}
                ignoreSpecialControls
                specialControls = {props.specialControls}
                specialControlsCount = { props.specialControlsCount}
                specialControlsHeading = {props.specialControlsHeading}
                buttonDisabledStatus={props.buttonDisabledStatus}
                addMoreControls = {props.addMoreControls}
                deleteControl = {props.deleteControl}
                formSubmitButtonName = 'Teacher'
                submitForm = {props.addTeacherFormSubmitted}
                newEntryFromUser = {props.newEntryFromUser}
                isFormSubmitDisabled ={props.isAddTeacherButtonDisabled}
                
            />
        </div>
    )
}


export default addTeacher