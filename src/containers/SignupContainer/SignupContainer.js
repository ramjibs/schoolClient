import React, { Component } from 'react'
import NavBar from '../../components/Navigation/NavBar/NavBar'
import styles from './SignupContainer.module.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions'
import checkValidityHandler from '../../FormValidation/formValidation'
import Signup from '../../components/Signup/Signup'
class SignupContainer extends Component {

    constructor(props){
        super(props)
        this. state = {
            controls: {
                schoolName: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'text',
                        name: 'schoolName',
                        id: 'schoolName',
                        placeholder: 'your school name',
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
                email: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'email',
                        name: 'email',
                        id: 'email',
                        placeholder: 'your school email id',
                        disabled: false
                    },
                    label: 'Email',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,
    
                    },
    
                },
                registrationNumber: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'text',
                        name: 'registrationNumber',
                        id: 'registrationNumber',
                        placeholder: 'your school registration number',
                        disabled: false
                    },
                    label: 'Registration Number',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,
    
                    },
    
    
                },
                licenseNumber: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'text',
                        name: 'licenseNumber',
                        id: 'licenseNumber',
                        placeholder: 'your school license number',
                        disabled: false
                    },
                    label: 'License Number',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 8
                    },
    
                },
    
            },
    
        }
        this.navigation = [
            {
                navHead: 'Sign Up',
                headLink: 'signup'
            },
            {
                navHead: 'Log In',
                headLink: 'login'
            },
            {
                navHead: 'About Us',
                headLink: 'about-us'
            }
        ]
    }

   

    componentDidUpdate() {
        if (this.props.signupSuccess) {
            this.props.history.replace('/')
        }
    }


    valueChangeHandler = (event, key) => {

        event.preventDefault();
        let updatedControls = {
            ...this.state.controls
        }
        let control = updatedControls[key]
        control.value = event.target.value
        control.touched = true
        const validtityResult = checkValidityHandler(control.validation, control.value)
        control.valid = validtityResult.isValid
        control.errorMessage = validtityResult.errorMessage

        updatedControls[key] = control

        this.setState({
            controls: updatedControls
        })

    }

    signupHandler = (event) => {
        event.preventDefault();

        let signup = {
            schoolName: this.state.controls.schoolName.value,
            email: this.state.controls.email.value,
            registrationNumber: this.state.controls.registrationNumber.value,
            licenseNumber: this.state.controls.licenseNumber.value
        }
        this.props.onSignup(signup)

    }

    render() {
        let controls = []
        let isSignupDisabled = true
        for (let key in this.state.controls) {
            controls.push({
                id: key,
                control: this.state.controls[key]
            })
            isSignupDisabled = this.state.controls[key].valid && isSignupDisabled
        }


        return (

            <div className={styles.SignupContainer}>
                <NavBar navigation={this.navigation}/>
                <div className={styles.AboutSchool}>
                    <h1 className={styles.AboutSchoolTitle}>School.It</h1>
                    <p className={styles.AboutSchoolContent}>A Paperless Office for your Organization
                    <br />
                         Thank you for Choosing us, we are determined to completely move all work releated to school to
                         a paperless environment where managing technical staff,
                         non-technical staff, Students and Parents were made easy.
                         School as an application provides you realtime data about your students attendence, mark sheet, ranks as well as teachers
                         performance, timetables and what not.
                         <br />
                         We act as bridge to connect with parents and teachers, So you can reach out to any parents of your students within no time in delay.
                         A Complete Suite for Paperless Office.
                    </p>

                </div>
                <div className={styles.SignupForm}>
                    <h3 className={styles.Title}>signup</h3>
                    <Signup
                        controls={controls}
                        changed={this.valueChangeHandler}
                        signup={this.signupHandler}
                        isSignupDisabled={!isSignupDisabled}
                        loading={this.props.loading}
                        error={this.props.error}
                    />

                </div>

            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.signup.loading,
        error: state.signup.error,
        signupSuccess: state.signup.signupSuccess
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onSignup: (signup) => dispatch(actionCreators.signup(signup)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
