import React, { Component } from 'react'
import styles from './SignupContainer.module.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions'
import checkValidityHandler from '../../FormValidation/formValidation'
import Signup from '../../components/Signup/Signup'
class SignupContainer extends Component {

    state = {
        controls: {
            schoolName: {
                controlType: 'input',
                controlConfig: {
                    type: 'text',
                    name: 'schoolName',
                    id: 'schoolName',
                    placeholder: 'Your School Name',
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
                    placeholder: 'Your Email ID',
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
                    placeholder: 'Your School Registration Number',
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
                    placeholder: 'Your School License Number',
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

    componentDidUpdate() {
        if(this.props.signupSuccess){
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
                <div className={styles.AboutSchool}>
                    <h1 className={styles.heading}>School</h1>
                    <p className={styles.para}>A Paperless Office for your Organization</p>
                    <p className={styles.para}>
                        Thank you for Choosing us, we are determined to completely move all work releated to school to
                         a paperless environment where managing technical staff, 
                         non-technical staff, Students and Parents were made easy.
                         School as an application provides you realtime data about your students attendence, mark sheet, ranks as well as teachers
                         performance, timetables and what not.
                    </p>
                    <p className={styles.para}>
                         We act as bridge to connect with parents and teachers, So you can reach out to any parents of your students within no time in delay.
                         A Complete Suite for Paperless Office.
                    </p>
                </div>
                <div className={styles.SignupForm}>
                    <h3 style={{
                        'textTransform': 'uppercase',
                        'letterSpacing': '2px'
                    }}>Registration</h3>
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
