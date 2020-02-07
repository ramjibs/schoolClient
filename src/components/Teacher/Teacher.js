import React from 'react'
import styles from './Teacher.module.css'
import AddTeacher from './AddTeacher/AddTeacher'

const teacher = (props) => {

    return(
        <div>
            <AddTeacher 
                controls = {props.controls}
                ignoreSpecialControls
                specialControls = {props.specialControls}
                specialControlsCount = { props.specialControlsCount}
                specialControlsHeading = {props.specialControlsHeading}
                formTitle = 'Enroll New Teacher'
            />
        </div>
    )
}

export default teacher