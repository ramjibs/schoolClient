import React, { Component } from 'react'
import Teacher from '../../components/Teacher/Teacher'
export default class TeachersContainer extends Component {

    state = {
        controls: {
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

                },

            },
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
                    required: true
                }
            },
            address: {
                controlType: 'textarea',
                controlConfig: {
                    type: 'textarea',
                    name: 'address',
                    id: 'address',
                    placeholder: 'Full address of teacher',
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
            contactNumber: {
                controlType: 'input',
                controlConfig: {
                    type: 'text',
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

                },

            },

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
                            type: 'text',
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

                        },

                    },
                    to: {
                        controlType: 'input',
                        controlConfig: {
                            type: 'text',
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
                },
                {
                    title: {
                        controlType: 'input',
                        controlConfig: {
                            type: 'text',
                            name: 'title',
                            id: 'title1',
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
                            id: 'branch1',
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
                            id: 'institution1',
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
                            type: 'text',
                            name: 'from',
                            id: 'from1',
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

                        },

                    },
                    to: {
                        controlType: 'input',
                        controlConfig: {
                            type: 'text',
                            name: 'to',
                            id: 'to1',
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

                        },

                    },
                    score: {
                        controlType: 'input',
                        controlConfig: {
                            type: 'text',
                            name: 'score',
                            id: 'score1',
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
                            placeholder: 'Name of the School worked at',
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
                    expFrom: {
                        controlType: 'input',
                        controlConfig: {
                            type: 'text',
                            name: 'expFrom',
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

                        },

                    },
                    expTo: {
                        controlType: 'input',
                        controlConfig: {
                            type: 'text',
                            name: 'expTo',
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

                        },

                    },

                    currentlyWorking: {
                        controlType: 'input',
                        controlConfig: {
                            type: 'text',
                            name: 'currentlyWorking',
                            id: 'currentlyWorking',
                            placeholder: 'Currently Working as',
                            disabled: false
                        },
                        label: 'Currently Working',
                        value: '',
                        valid: false,
                        errorMessage: '',
                        touched: false,
                        validation: {
                            required: true,

                        },

                    },
                    subjectsThought: {
                        controlType: 'input',
                        controlConfig: {
                            type: 'text',
                            name: 'subjectsThought',
                            id: 'subjectsThought',
                            placeholder: 'Subjects Thought',
                            disabled: false
                        },
                        label: 'Subjects Thought',
                        value: '',
                        valid: false,
                        errorMessage: '',
                        touched: false,
                        validation: {
                            required: true,

                        },

                    },

                }
            ]



        },
        specialControls: ['qualification', 'experience'],
        specialControlsHeading : ['Teacher Qualification', 'Teacher Experience'],
        specialControlsCount: [1,1],
        specialControlsIndex: [4, 5]
    }


    render() {
        let controls = []
        for (const key in this.state.controls) {
            controls.push({
                id: key,
                control: this.state.controls[key]
            })
        }

        return (
            <div>
                <Teacher
                    controls={controls}
                    ignoreSpecialControls
                    specialControls = { this.state.specialControls}
                    specialControlsCount = {this.state.specialControlsCount}
                    specialControlsHeading = {this.state.specialControlsHeading}
                    
                />
            </div>
        )
    }
}
