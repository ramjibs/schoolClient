import React from 'react'
import AddTeacher from '../../../components/Teacher/AddTeacher/AddTeacher'
import checkValidityHandler from '../../../FormValidation/formValidation'
import * as actionCreators from '../../../store/actions'
import { connect } from 'react-redux'
import axios from '../../../axios-school'
import * as api from '../../../api'

class AddTeacherContainer extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            controls: {

                name: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'text',
                        name: 'name',
                        id: 'name',
                        placeholder: 'Teacher Name',
                        disabled: false

                    },
                    label: 'Name',
                    value: '',
                    valid: false,
                    errorMessage: false,
                    touched: false,
                    mandatory: true,
                    validation: {
                        required: true,
                        textOnly: true,
                    }
                },
                email: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'email',
                        name: 'email',
                        id: 'email',
                        placeholder: 'Teacher Email ID',
                        disabled: false
                    },
                    label: 'Email',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    mandatory: true,
                    validation: {
                        required: true,
                        matchEmail: true,

                    },

                },
                dob: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'date',
                        name: 'dob',
                        id: 'dob',
                        placeholder: 'Date of Birth',
                        disabled: false
                    },
                    label: 'Date of Birth',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,
                        ageRange: {
                            greaterThan: 17,
                            lesserThan: 65
                        }


                    },

                },
                gender: {
                    controlType: 'radio',
                    buttons: [
                        {
                            type: 'radio',
                            name: 'gender',
                            id: 'male',
                            radiolabel: 'Male',
                            value: 1,
                            // checked: 'checked'

                        },
                        {
                            type: 'radio',
                            name: 'gender',
                            id: 'female',
                            radiolabel: 'Female',
                            value: 0,

                        },
                        {
                            type: 'radio',
                            name: 'gender',
                            id: 'other',
                            radiolabel: 'Others',
                            value: 2,
                        }
                    ],

                    controlConfig: {
                        type: 'radio',
                        name: 'gender',
                        id: 'gender',
                        placeholder: 'Gender',
                        disabled: false
                    },
                    label: 'Gender',
                    value: -1,
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,


                    },

                },
                state: {
                    controlType: 'select',
                    controlConfig: {
                        type: 'text',
                        name: 'state',
                        id: 'state',
                        default: 'default',
                        defaultValue: 'Please select state',
                        disabled: false,
                    },
                    options: null,
                    label: 'State',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true
                    }
                },
                district: {
                    controlType: 'select',
                    controlConfig: {
                        type: 'text',
                        name: 'district',
                        id: 'district',
                        default: 'default',
                        defaultValue: 'Please select district',
                        disabled: true,
                    },
                    options: null,
                    label: 'District',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true
                    }

                },

                address: {
                    controlType: 'textarea',
                    controlConfig: {
                        type: 'textarea',
                        name: 'address',
                        id: 'address',
                        placeholder: 'Complete address',
                        disabled: false
                    },
                    label: 'Address',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,


                    },

                },

                pancard: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'text',
                        maxLength: 10,
                        name: 'pancard',
                        id: 'pancard',
                        placeholder: 'Teacher Pan Card',
                        disabled: false
                    },
                    label: 'Pan Card Number',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,


                    },

                },
                subjects: {
                    controlType: 'select-multiple',
                    controlConfig: {
                        // type: 'select',
                        name: 'subjects',
                        id: 'subjects',
                        placeholder: 'Please Select Options',
                        disabled: false
                    },
                    options: null,
                    label: 'Subjects',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        requiredArray: true,

                    },

                },
                teachingLevel: {
                    controlType: 'select-multiple',
                    controlConfig: {
                        // type: 'select',
                        name: 'teachingLevel',
                        id: 'teachingLevel',
                        placeholder: 'Please Select Options',
                        disabled: false
                    },
                    options: null,
                    label: 'Teaching Level',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        requiredArray: true,

                    },

                },
                contactDetails: [
                    {
                        contactNumber: {
                            controlType: 'input',
                            controlConfig: {
                                type: 'text',
                                maxLength: 10,
                                name: 'contactNumber',
                                id: 'contactNumber',
                                placeholder: 'Teacher contact number',
                                disabled: false
                            },
                            label: 'Contact Number',
                            value: '',
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: true,
                                numberOnly: true

                            }

                        }
                    }
                ],
                qualification: [
                    {
                        title: {
                            controlType: 'input',
                            controlConfig: {
                                type: 'text',
                                name: 'title',
                                id: 'title',
                                placeholder: 'Qualification Title',
                                disabled: false
                            },
                            label: 'Title',
                            value: '',
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: true,

                            },

                        },
                        branch: {
                            controlType: 'input',
                            controlConfig: {
                                type: 'text',
                                name: 'branch',
                                id: 'branch',
                                placeholder: 'Qualification Branch',
                                disabled: false
                            },
                            label: 'Branch',
                            value: '',
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: true,

                            },

                        },
                        institution: {
                            controlType: 'input',
                            controlConfig: {
                                type: 'text',
                                name: 'institution',
                                id: 'institution',
                                placeholder: 'Name of Institution',
                                disabled: false
                            },
                            label: 'Institution',
                            value: '',
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: true,

                            },

                        },
                        from: {
                            controlType: 'input',
                            controlConfig: {
                                type: 'date',
                                name: 'from',
                                id: 'from',
                                placeholder: 'Started from',
                                disabled: false
                            },
                            label: 'From',
                            value: '',
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: true,
                                range: {
                                    greaterThan: null,
                                    lesserThan: null,
                                    dob: null
                                },
                                checkDOB: true,
                                timeline: [],
                                index: 0,
                                by: 'from'

                            },

                        },
                        to: {
                            controlType: 'input',
                            controlConfig: {
                                type: 'date',
                                name: 'to',
                                id: 'to',
                                placeholder: 'Ended at',
                                disabled: false
                            },
                            label: 'To',
                            value: '',
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: true,
                                range: {
                                    greaterThan: null,
                                    lesserThan: null,
                                    dob: null
                                },
                                checkDOB: true,
                                timeline: [],
                                index: 0,
                                by: 'to'


                            },

                        },
                        score: {
                            controlType: 'input',
                            controlConfig: {
                                type: 'text',
                                name: 'score',
                                id: 'score',
                                placeholder: 'Marks secured',
                                disabled: false
                            },
                            label: 'Score',
                            value: '',
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: true,

                            },

                        },
                    }
                ],
                experience: [
                    {
                        schoolName: {
                            controlType: 'input',
                            controlConfig: {
                                type: 'text',
                                name: 'schoolName',
                                id: 'schoolName',
                                placeholder: 'Name of the School',
                                disabled: false
                            },
                            label: 'School Name',
                            value: '',
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: true,

                            },

                        },
                        from: {
                            controlType: 'input',
                            controlConfig: {
                                type: 'date',
                                name: 'from',
                                id: 'expFrom',
                                placeholder: 'Experience From',
                                disabled: false
                            },
                            label: 'From',
                            value: '',
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: true,
                                range: {
                                    greaterThan: null,
                                    lesserThan: null,
                                    dob: null
                                },
                                checkDOB: true,
                                timeline: [],
                                index: 0,
                                by: 'from'


                            },

                        },
                        to: {
                            controlType: 'input',
                            controlConfig: {
                                type: 'date',
                                name: 'to',
                                id: 'expTo',
                                placeholder: 'Experience To',
                                disabled: false
                            },
                            label: 'To',
                            value: '',
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: true,
                                range: {
                                    greaterThan: null,
                                    lesserThan: null,
                                    dob: null
                                },
                                checkDOB: true,
                                timeline: [],
                                index: 0,
                                by: 'to'

                            },

                        },

                        currentlyWorking: {
                            controlType: 'checkbox',
                            controlConfig: {
                                type: 'checkbox',
                                name: 'currentlyWorking',
                                id: 'currentlyWorking',
                                value: 'workingStatus',
                                disabled: false,
                                checked: false,

                            },
                            notRequiredLabel: true,
                            label: 'Currently Working',
                            value: false,
                            valid: false,
                            errorMessage: '',
                            touched: false,
                            validation: {
                                required: false,
                                currentlyWorking: true,
                                rules: {
                                    timeline: [],



                                },
                                index: 0,
                                toControl: ''

                            },

                        },

                    }
                ]



            },
            specialControls: ['contactDetails', 'qualification', 'experience'],
            specialControlsHeading: ['Contact Details', 'Teacher Qualification', 'Teacher Experience'],
            controlWithCustomEvent: ['subjects', 'teachingLevel'],
            qualificationTimeline: [
                {
                    startPeriod: null,
                    endPeriod: null
                }
            ],
            experienceTimeline: [
                {
                    startPeriod: null,
                    endPeriod: null
                }
            ],
            globalRange: {
                greaterThan: null,
                lesserThan: null,
                dob: null
            },
            buttonDisabledStatus: [
                {
                    for: 'qualification',
                    isDisabled: false
                },
                {
                    for: 'experience',
                    isDisabled: false
                },
                {
                    for: 'contactDetails',
                    isDisabled: false
                }
            ]

        }

    }


    additionalControl = (uniqueId, controlName) => {
        let qualification = {
            title: {
                controlType: 'input',
                controlConfig: {
                    type: 'text',
                    name: 'title',
                    id: 'title',
                    placeholder: 'Qualification Title',
                    disabled: false
                },
                label: 'Title',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,

                },

            },
            branch: {
                controlType: 'input',
                controlConfig: {
                    type: 'text',
                    name: 'branch',
                    id: 'branch',
                    placeholder: 'Qualification Branch',
                    disabled: false
                },
                label: 'Branch',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,

                },

            },
            institution: {
                controlType: 'input',
                controlConfig: {
                    type: 'text',
                    name: 'institution',
                    id: 'institution',
                    placeholder: 'Name of Institution',
                    disabled: false
                },
                label: 'Institution',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,

                },

            },
            from: {
                controlType: 'input',
                controlConfig: {
                    type: 'date',
                    name: 'from',
                    id: 'from',
                    placeholder: 'Started from',
                    disabled: false
                },
                label: 'From',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,
                    range: {
                        greaterThan: null,
                        lesserThan: null,
                        dob: null
                    },
                    checkDOB: true,
                    timeline: [],
                    index: 0,
                    by: 'from'

                },

            },
            to: {
                controlType: 'input',
                controlConfig: {
                    type: 'date',
                    name: 'to',
                    id: 'to',
                    placeholder: 'Ended at',
                    disabled: false
                },
                label: 'To',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,
                    range: {
                        greaterThan: null,
                        lesserThan: null,
                        dob: null
                    },
                    checkDOB: true,
                    timeline: [],
                    index: 0,
                    by: 'to'

                },

            },
            score: {
                controlType: 'input',
                controlConfig: {
                    type: 'text',
                    name: 'score',
                    id: 'score',
                    placeholder: 'Marks secured',
                    disabled: false
                },
                label: 'Score',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,

                },

            },
        }

        let experience = {
            schoolName: {
                controlType: 'input',
                controlConfig: {
                    type: 'text',
                    name: 'schoolName',
                    id: 'schoolName',
                    placeholder: 'Name of the School',
                    disabled: false
                },
                label: 'School Name',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,

                },

            },
            from: {
                controlType: 'input',
                controlConfig: {
                    type: 'date',
                    name: 'from',
                    id: 'expFrom',
                    placeholder: 'Experience From',
                    disabled: false
                },
                label: 'From',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,
                    range: {
                        greaterThan: null,
                        lesserThan: null,
                        dob: null
                    },
                    checkDOB: true,
                    timeline: [],
                    index: 0,
                    by: 'from'

                },

            },
            to: {
                controlType: 'input',
                controlConfig: {
                    type: 'date',
                    name: 'to',
                    id: 'expTo',
                    placeholder: 'Experience To',
                    disabled: false
                },
                label: 'To',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,
                    range: {
                        greaterThan: null,
                        lesserThan: null,
                        dob: null
                    },
                    checkDOB: true,
                    timeline: [],
                    index: 0,
                    by: 'to'

                },

            },

            currentlyWorking: {
                controlType: 'checkbox',
                controlConfig: {
                    type: 'checkbox',
                    name: 'currentlyWorking',
                    id: 'currentlyWorking',
                    value: 'workingStatus',
                    disabled: false,
                    checked: false,
                },
                notRequiredLabel: true,
                label: 'Currently Working',
                value: false,
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: false,
                    currentlyWorking: true,
                    rules: {
                        timeline: [],

                    },
                    index: 0,
                    toControl: ''
                },

            }

        }

        let contactDetails = {
            contactNumber: {
                controlType: 'input',
                controlConfig: {
                    type: 'text',
                    maxLength: 10,
                    name: 'contactNumber',
                    id: 'contactNumber',
                    placeholder: 'Teacher contact number',
                    disabled: false
                },
                label: 'Contact Number',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,
                    numberOnly: true

                }
            }
        }

        switch (controlName) {
            case 'qualification':

                for (const key in qualification) {
                    qualification[key].controlConfig.id = qualification[key].controlConfig.id + uniqueId
                    if (key === 'from' || key === 'to') {
                        qualification[key].validation.index = uniqueId
                    }

                }

                return qualification;

            case 'experience':
                for (const key in experience) {
                    experience[key].controlConfig.id = experience[key].controlConfig.id + uniqueId
                    if (key === 'from' || key === 'to' || key === 'currentlyWorking') {
                        experience[key].validation.index = uniqueId
                    }
                }
                return experience;

            case 'contactDetails':
                for (const key in contactDetails) {
                    contactDetails[key].controlConfig.id = contactDetails[key].controlConfig.id + uniqueId
                }
                return contactDetails;

            default:
                break;
        }


    }
    addMoreControlsHandler = (event, controlName) => {

        event.preventDefault()
        let timeline = {
            startPeriod: null,
            endPeriod: null
        }
        let timelineName = ''
        let timelines = []
        let updatedControls = {
            ...this.state.controls
        }
        let control = updatedControls[controlName]
        switch (controlName) {
            case 'qualification':
                timelines = [...this.state.qualificationTimeline]
                timelines.push(timeline)
                timelineName = 'qualificationTimeline'
                break;

            case 'experience':
                timelines = [...this.state.experienceTimeline]
                timelines.push(timeline)
                timelineName = 'experienceTimeline'
                break;
            default:
                break;
        }
        let numberOfControlPresent = control.length
        let additionalControl = this.additionalControl(numberOfControlPresent, controlName)
        if (controlName === 'experience') {
            for (let i = 0; i < numberOfControlPresent; i++) {
                let expObj = control[i]
                let currWorkingObj = expObj['currentlyWorking']
                if (currWorkingObj.value) {
                    additionalControl['currentlyWorking'].controlConfig.disabled = true
                    break
                }
            }
        }
        control.push(additionalControl)
        updatedControls[controlName] = control
        if (controlName === 'contactDetails') {
            this.setState({
                controls: updatedControls
            })
        }
        else {
            this.setState({
                controls: updatedControls,
                [timelineName]: timelines
            })
        }



    }

    deletedControl = (control, element) => {

        for (let index = element + 1; index < control.length; index++) {

            let object = control[index]
            for (const key in object) {
                // qualification[key].controlConfig.id = qualification[key].controlConfig.id + uniqueId
                if (key === 'from' || key === 'to' || key === 'currentlyWorking') {
                    object[key].validation.index = index - 1
                }
            }


        }
        control.splice(element, 1)
        return control



    }

    deleteControlHandler = (event, controlName, element) => {
        event.preventDefault();

        let updatedControls = {
            ...this.state.controls
        }
        let timelineName = ''
        let timelines = []

        let control = updatedControls[controlName]


        switch (controlName) {
            case 'qualification':
                timelines = [...this.state.qualificationTimeline]
                timelines.splice(element, 1)
                timelineName = 'qualificationTimeline'
                break;

            case 'experience':
                timelines = [...this.state.experienceTimeline]
                timelines.splice(element, 1)
                timelineName = 'experienceTimeline'
                break;

            default:
                break;
        }

        let newControl = this.deletedControl(control, element)
        updatedControls[controlName] = newControl
        this.setState({
            controls: updatedControls,
            [timelineName]: timelines
        })
    }

    valueChangeHandler = (event, controlName, objectIndex = -1, key = undefined) => {


        if (!this.state.controlWithCustomEvent.includes(controlName)) {
            key === 'currentlyWorking' || 'gender' ? event.stopPropagation() : event.preventDefault()
        }
        let updatedControls = {
            ...this.state.controls
        }
        let updatedlRange = {
            ...this.state.globalRange
        }
        let updatedExpTimeline = [...this.state.experienceTimeline]

        let updatedButtonDisabledStatus = [...this.state.buttonDisabledStatus]

        let control = updatedControls[controlName]

        if (objectIndex >= 0 && key !== undefined) {
            let object = control[objectIndex];
            if (key === 'currentlyWorking') {

                object[key].controlConfig.checked = event.target.checked
                object[key].value = event.target.checked

                let toControl = object['to']
                let newValidation = toControl.validation
                let newControlConfig = toControl.controlConfig
                let experienceTimelineObj = updatedExpTimeline[objectIndex]

                newValidation.required = !event.target.checked
                newControlConfig.disabled = event.target.checked
                toControl.validation = newValidation
                toControl.controlConfig = newControlConfig

                for (let index = 0; index < control.length; index++) {

                    let object = control[index]
                    if (index !== objectIndex) {
                        let newCurrentlyWorking = object['currentlyWorking']
                        newCurrentlyWorking.controlConfig.disabled = event.target.checked
                        object['currentlyWorking'] = newCurrentlyWorking
                        control[index] = object
                    }

                }

                if (toControl.touched) {
                    toControl.value = event.target.checked ? '' : toControl.value
                    experienceTimelineObj.endPeriod = null
                    updatedExpTimeline[objectIndex] = experienceTimelineObj
                    object[key].validation.rules.timeline = updatedExpTimeline

                }

                object['to'] = toControl

                // let newbuttonObjectExp = updatedButtonDisabledStatus['1']
                // newbuttonObjectExp.isDisabled = event.target.checked
                // updatedButtonDisabledStatus['1'] = newbuttonObjectExp


            }
            else {
                object[key].value = event.target.value


            }
            if (key === 'from' || key === 'to') {

                let newValidation = null;
                let newTimeline = []
                let newTimelineObject = null
                let newCurrentlyWorking = null
                let newValidationCurrWorking = null
                let newRules = null

                switch (controlName) {
                    case 'qualification':
                        newValidation = object[key].validation
                        newTimeline = [...this.state.qualificationTimeline]
                        newTimelineObject = newTimeline[objectIndex]
                        if (key === 'from') {
                            newTimelineObject.startPeriod = event.target.value === '' ? null : new Date(event.target.value).getTime()
                        }
                        else {
                            newTimelineObject.endPeriod = event.target.value === '' ? null : new Date(event.target.value).getTime()
                        }
                        newValidation.range = this.state.globalRange
                        newTimeline[objectIndex] = newTimelineObject
                        newValidation.timeline = newTimeline
                        object[key].validation = newValidation

                        break;
                    case 'experience':
                        newCurrentlyWorking = object['currentlyWorking']
                        newValidationCurrWorking = newCurrentlyWorking.validation
                        newRules = newValidationCurrWorking.rules
                        newValidation = object[key].validation
                        newTimeline = [...this.state.experienceTimeline]
                        newTimelineObject = newTimeline[objectIndex]
                        if (key === 'from') {
                            newTimelineObject.startPeriod = event.target.value === '' ? null : new Date(event.target.value).getTime()
                        }
                        else {
                            newTimelineObject.endPeriod = event.target.value === '' ? null : new Date(event.target.value).getTime()
                        }
                        newValidation.range = this.state.globalRange
                        newTimeline[objectIndex] = newTimelineObject
                        newValidation.timeline = newTimeline
                        object[key].validation = newValidation
                        newRules.timeline = newTimeline
                        newValidationCurrWorking.rules = newRules
                        newCurrentlyWorking.validation = newValidationCurrWorking
                        object['currentlyWorking'] = newCurrentlyWorking

                        break;

                    default:
                        break;
                }

            }


            const validationResult = checkValidityHandler(object[key].validation, object[key].value)
            if (object[key].validation.by === 'from') {
                let toControl = object['to']
                if (toControl.touched) {
                    toControl.valid = validationResult.isToValid
                    toControl.errorMessage = validationResult.toErrorMessage
                }
                object['to'] = toControl
            }

            if (key === 'currentlyWorking') {
                let fromControl = object['from']
                let toControl = object['to']
                fromControl.valid = validationResult.isValid
                fromControl.errorMessage = validationResult.errorMessage
                toControl.valid = validationResult.isToValid
                toControl.errorMessage = validationResult.toErrorMessage
                object['from'] = fromControl
                object['to'] = toControl
                object[key].touched = true
                object[key].valid = event.target.checked
                if (!validationResult.isValid && validationResult.errorMessage === 'Please enter value for From.') {
                    object[key].controlConfig.checked = false
                    object[key].value = false
                    object[key].valid = false
                    for (let index = 0; index < control.length; index++) {

                        let object = control[index]
                        if (index !== objectIndex) {
                            let newCurrentlyWorking = object['currentlyWorking']
                            newCurrentlyWorking.controlConfig.disabled = false
                            object['currentlyWorking'] = newCurrentlyWorking
                            control[index] = object
                        }
    
                    }
                }
            }
            else {
                object[key].touched = true
                object[key].valid = validationResult.isValid
                object[key].errorMessage = validationResult.errorMessage
            }


            control[objectIndex] = object
        }

        else {
            control.value = event.target.value
            control.touched = true
            const validationResult = checkValidityHandler(control.validation, control.value)



            control.valid = validationResult.isValid
            control.errorMessage = validationResult.errorMessage

            if (controlName === 'state') {

                let newDistrictControl = updatedControls['district']

                let options = control.options
                if (control.touched && !newDistrictControl.touched) {

                    for (let index = 0; index < options.length; index++) {
                        const element = options[index];

                        if (element.value === control.value) {
                            let district_id = element.district_id
                            axios.get(api.GET_DISTRICTS + district_id)
                                .then(response => {
                                    let optionArray = response.data.districts.map(district => {
                                        return {
                                            id: district,
                                            value: district
                                        }
                                    })
                                    newDistrictControl.options = optionArray
                                    // newDistrictControl.controlConfig.disabled = true
                                    updatedControls['district'] = newDistrictControl
                                    this.setState({
                                        controls: updatedControls
                                    })
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                            break;

                        }

                    }

                }
                else if (control.touched && newDistrictControl.touched) {

                    newDistrictControl.value = ''
                    newDistrictControl.valid = false
                    newDistrictControl.errorMessage = 'Please select a value'

                    for (let index = 0; index < options.length; index++) {
                        const element = options[index];

                        if (element.value === control.value) {
                            let district_id = element.district_id
                            axios.get(api.GET_DISTRICTS + district_id)
                                .then(response => {
                                    let optionArray = response.data.districts.map(district => {
                                        return {
                                            id: district,
                                            value: district
                                        }
                                    })
                                    newDistrictControl.options = optionArray
                                    // newDistrictControl.controlConfig.disabled = true
                                    updatedControls['district'] = newDistrictControl
                                    this.setState({
                                        controls: updatedControls
                                    })
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                            break;

                        }

                    }

                }
                newDistrictControl.controlConfig.disabled = false
                updatedControls['district'] = newDistrictControl
            }


            if (controlName === 'dob') {

                if (control.value === '') {
                    updatedlRange.greaterThan = null
                    updatedlRange.lesserThan = null
                    updatedlRange.dob = null
                }
                else {
                    let greaterThan = new Date(control.value)
                    let lesserThan = new Date(greaterThan.getFullYear() + 65, greaterThan.getMonth(), greaterThan.getDate())
                    updatedlRange.greaterThan = greaterThan.getTime()
                    updatedlRange.lesserThan = lesserThan.getTime()
                    updatedlRange.dob = greaterThan.getTime()
                }





            }
        }


        updatedControls[controlName] = control

        this.setState({
            controls: updatedControls,
            globalRange: updatedlRange,
            buttonDisabledStatus: updatedButtonDisabledStatus,
            experienceTimeline: updatedExpTimeline
        })


    }

    qualificationObject() {
        return {
            title: String,
            branch: String,
            institution: String,
            from: String,
            to: String,
            score: String

        }
    }

    experienceObject() {
        return {
            schoolName: String,
            from: String,
            to: String,
            currentlyWorking: Boolean,
        }
    }

    contactDetailsObject() {
        return {
            contactNumber: String
        }
    }

    addTeacherFormSubmissionHandler = (event) => {

        event.preventDefault()

        let addTeacherFormSubmissionObject = {
            role: 'teacher',
            name: String,
            email: String,
            dob: String,
            gender: String,
            state: String,
            district: String,
            address: String,
            contactNumber: String,
            pancard: String,
            contactDetails: [],
            subjects: [],
            teachingLevel: [],
            qualification: [],
            experience: [],
            qualificationTimeline: this.state.qualificationTimeline,
            experienceTimeline: this.state.experienceTimeline,
            globalRange: this.state.globalRange
        }




        for (const key in this.state.controls) {

            if (key === 'qualification') {

                let qualificationArray = this.state.controls[key]
                let len = qualificationArray.length
                for (let index = 0; index < len; index++) {
                    let object = qualificationArray[index]
                    let qualificationObj = this.qualificationObject()
                    for (let objKey in object) {
                        qualificationObj[objKey] = object[objKey].value
                    }
                    addTeacherFormSubmissionObject.qualification.push(qualificationObj)
                }
            }
            else if (key === 'experience') {
                addTeacherFormSubmissionObject.experience = []
                let experienceArray = this.state.controls[key]
                let len = experienceArray.length

                for (let index = 0; index < len; index++) {
                    let object = experienceArray[index]
                    let experienceObj = this.experienceObject()
                    for (let objKey in object) {
                        experienceObj[objKey] = object[objKey].value

                    }
                    addTeacherFormSubmissionObject.experience.push(experienceObj)
                }

            }

            else if (key === 'contactDetails') {

                addTeacherFormSubmissionObject.contactDetails = []
                let ContactDetailsArray = this.state.controls[key]
                let len = ContactDetailsArray.length
                for (let index = 0; index < len; index++) {
                    let object = ContactDetailsArray[index]
                    let contactDetaileObj = this.contactDetailsObject()
                    for (let objKey in object) {
                        contactDetaileObj[objKey] = object[objKey].value
                    }
                    addTeacherFormSubmissionObject.contactDetails.push(contactDetaileObj)
                }

            }
            else {
                addTeacherFormSubmissionObject[key] = this.state.controls[key].value
            }


        }

        this.props.onAddTeacher(addTeacherFormSubmissionObject)

    }

    render() {

        let isAddTeacherButtonDisabled = true
        let controls = []
        for (const key in this.state.controls) {
            controls.push({
                id: key,
                control: this.state.controls[key]
            })

            if (key === 'qualification') {
                let qualificationArray = this.state.controls[key]
                let len = qualificationArray.length
                for (let index = 0; index < len; index++) {
                    let object = qualificationArray[index]
                    for (let objKey in object) {
                        isAddTeacherButtonDisabled = object[objKey].valid && isAddTeacherButtonDisabled
                    }
                }
            }
            else if (key === 'experience') {
                let experienceArray = this.state.controls[key]
                let len = experienceArray.length
                for (let index = 0; index < len; index++) {
                    let object = experienceArray[index]
                    for (let objKey in object) {
                        if (objKey !== 'currentlyWorking') {
                            isAddTeacherButtonDisabled = object[objKey].valid && isAddTeacherButtonDisabled
                        }

                    }
                }

            }
            else if (key === 'contactDetails') {
                let contactDetailsArr = this.state.controls[key]
                let len = contactDetailsArr.length
                for (let index = 0; index < len; index++) {
                    let object = contactDetailsArr[index]
                    for (let objKey in object) {
                        isAddTeacherButtonDisabled = object[objKey].valid && isAddTeacherButtonDisabled
                    }
                }

            }
            else {
                isAddTeacherButtonDisabled = this.state.controls[key].valid && isAddTeacherButtonDisabled
            }


        }

        return (
           
                <AddTeacher
                    controls={controls}
                    ignoreSpecialControls
                    specialControls={this.state.specialControls}
                    specialControlsCount={this.state.specialControlsCount}
                    specialControlsHeading={this.state.specialControlsHeading}
                    buttonDisabledStatus={this.state.buttonDisabledStatus}
                    addMoreControls={this.addMoreControlsHandler}
                    deleteControl={this.deleteControlHandler}
                    newEntryFromUser={this.valueChangeHandler}
                    isAddTeacherButtonDisabled={isAddTeacherButtonDisabled}
                    addTeacherFormSubmitted={this.addTeacherFormSubmissionHandler}
                    formTitle='Enroll New Teacher'
                    loading = {this.props.addNewTeacherLoading}
                />
            
        )
    }

    // static getDerivedStateFromProps(nextProps, prevState) {

    //     let updatedControls = {
    //         ...prevState.controls
    //     }

    //     let updatedSubjects = {
    //         ...updatedControls.subjects
    //     }



    //     if (nextProps.subjects.length > 0 && updatedSubjects.options == null) {



    //         let subjects = nextProps.subjects.map(subject => {
    //             return {
    //                 id: subject._id,
    //                 value: subject.subjectName
    //             }
    //         })
    //         updatedSubjects.options = subjects
    //         updatedControls.subjects = updatedSubjects
    //         prevState.controls = updatedControls

    //         return {
    //             controls: updatedControls
    //         }

    //     }
    //     else {
    //         return null
    //     }


    // }

    componentDidUpdate(prevProps, prevState) {



        if (this.props.subjects !== prevProps.subjects) {

            let updatedControl = {
                ...prevState.controls
            }

            let updatedSubjects = {
                ...updatedControl.subjects
            }

            let subjects = this.props.subjects.map(subject => {
                return {
                    id: subject.subjectName,
                    value: subject.subjectName
                }
            })


            updatedSubjects.options = subjects
            updatedControl.subjects = updatedSubjects
            this.setState({
                controls: updatedControl
            })


        }

        if (this.props.states !== prevProps.states) {

            let updatedControl = {
                ...prevState.controls
            }

            let updatedState = {
                ...updatedControl.state
            }

            let states = this.props.states.map(state => {
                return {
                    id: state._id,
                    value: state.stateName,
                    district_id: state._districts
                }
            })

            updatedState.options = states
            updatedControl.state = updatedState
            this.setState({
                controls: updatedControl
            })
        }

        if (this.props.categories !== prevProps.categories) {

            let updatedControl = {
                ...prevState.controls
            }

            let updatedTeachingLevel = {
                ...updatedControl.teachingLevel
            }

            let category = this.props.categories.map(category => {
                return {
                    id: category.categoryName,
                    value: category.categoryName,
                    description: category.description
                }
            })

            updatedTeachingLevel.options = category
            updatedControl.teachingLevel = updatedTeachingLevel
            this.setState({
                controls: updatedControl
            })
        }





    }



}

const mapStateToProps = state => {

    return {
        addNewTeacherLoading: state.teacher.addNewTeacherLoading,
        addNewTeacherSuccess: state.teacher.addNewTeacherSuccess,
        addNewTeacherSuccessMessage: state.teacher.addNewTeacherSuccessMessage,
        addNewTeacherFailure: state.teacher.addNewTeacherFailure,
        addNewTeacherError: state.teacher.addNewTeacherError,
        subjects: state.resource.subjects,
        states: state.resource.states,
        categories: state.resource.categories


    }
}

const mapDispatchToProps = dispatch => {
    return {

        onAddTeacher: (data) => dispatch(actionCreators.addTeacher(data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTeacherContainer)