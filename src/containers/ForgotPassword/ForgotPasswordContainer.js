import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions'
import checkValidityHandler from '../../FormValidation/formValidation'
import ForgotPassword from '../../components/ForgotPassword/forgotPassword'
import styles from './ForgotPasswordContainer.module.css'

class ForgotPasswordContainer extends Component {



    state = {
        controls: {
            userId: {
                controlType: 'input',
                controlConfig: {
                    type: 'text',
                    name: 'userid',
                    id: 'userid',
                    placeholder: 'Your Email or User ID',
                    disabled: false
                },
                label: 'User ID',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,
                }

            },
            newPassword: {
                controlType: 'input',
                controlConfig: {
                    type: 'password',
                    name: 'newpassword',
                    id: 'newpassword',
                    placeholder: 'New Password',
                    disabled: false
                },
                label: 'New Password',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,
                    minLength: 8,
                    
                }

            },
            confirmPassword: {
                controlType: 'input',
                controlConfig: {
                    type: 'password',
                    name: 'confirmPassword',
                    id: 'confirmPassword',
                    placeholder: 'Confirm Password',
                    disabled: false
                },
                label: 'Confirm Password',
                value: '',
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    required: true,
                    matchValue: true,
                    matchWith: ''
                }

            },
            Otp: {
                controlType: 'otp',
                controlConfig: {
                    type: 'text',
                    placeholder: '',
                    disabled: false,
                    maxLength: 1
                },
                label: 'OTP',
                value: [],
                valid: false,
                errorMessage: '',
                touched: false,
                validation: {
                    otpLength: 4,
                },
                otpLength: 4

            },
        },

        otpButtonName: 'send otp',
        otpButtondisabled: true,
        otpMessage: '',
        showPassAndOtp: false,
    }

    constructor(props) {
        super(props);
        this.sendOtpHandler = this.sendOtpHandler.bind(this);
    }


    componentDidUpdate() {

        if (this.props.autoLogin && this.props.token) {
            this.props.history.replace('/home')
        }
    }


    valueChangeHandler = (event, key, i = -1) => {

        event.preventDefault();
        let otpButtondisabled = true
        //get all the controls
        let updatedControls = {
            ...this.state.controls
        }
        //choosse the one whose value is changed
        
        let control = updatedControls[key]

        if (i !== -1) {
            control.value[i] = event.target.value
        }
        else {
            control.value = event.target.value
        }
        let updatedValidation = null

        //when key is new password and confirm password is touched
        let confirmPassControl = updatedControls.confirmPassword
        if (confirmPassControl.touched && key === 'newPassword') {

             updatedValidation = {
                ...confirmPassControl.validation
            }
            updatedValidation.matchWith = confirmPassControl.value
            confirmPassControl.validation = updatedValidation
            const validityConfirmPassword = checkValidityHandler(confirmPassControl.validation, control.value)
            confirmPassControl.valid = validityConfirmPassword.isValid
            confirmPassControl.errorMessage = validityConfirmPassword.errorMessage
            updatedControls['confirmPassword'] = confirmPassControl
        }
    
        else if (key === 'confirmPassword'){

            updatedValidation = {
                ...control.validation
            }
            updatedValidation.matchWith = this.state.controls.newPassword.value
            control.validation = updatedValidation
        }

        control.touched = true
        const validtityResult = checkValidityHandler(control.validation, control.value)
        control.valid = validtityResult.isValid
        control.errorMessage = validtityResult.errorMessage
        updatedControls[key] = control

        if ((key === 'userId' && control.valid) || !this.state.otpButtondisabled) {
            otpButtondisabled = false
        }
        this.setState({
            controls: updatedControls,
            otpButtondisabled: otpButtondisabled
        })

    }
    changePasswordHandler = (event) => {
        event.preventDefault();
        this.props.onChangePassword(this.props.email, this.state.controls.newPassword.value, this.state.controls.Otp.value.join(''))
        if (this.props.autoLogin) {
            this.props.history.push('/home')
        }

    }

    async sendOtpHandler(event) {
        event.preventDefault()

        try {
            const response = await this.props.onForgotPassword(this.state.controls.userId.value)


            if(response){
                let otpButtondisabled = true

            let updatedControls = {
                ...this.state.controls
            }
            let control = updatedControls['userId']
            let config = {
                ...control.controlConfig
            }
            config.disabled = true
            control.controlConfig = config
            updatedControls['userId'] = control
            this.setState({
                showPassAndOtp: true,
                otpButtondisabled: otpButtondisabled,
                otpButtonName: 're-send otp',
                controls: updatedControls,
                otpMessage: 'An OTP is sent to your Mail ID. If not received you can request new one after 3 mins.'
            })



            setTimeout(() => {
                this.setState({
                    otpButtondisabled: false
                })
            }, 120000)


            }

            



        }
        catch (error) {
            console.log(error)
        }







    }

    render() {
        let controls = []
        let isChangePasswordnDisabled = true
        for (let key in this.state.controls) {
            controls.push({
                id: key,
                control: this.state.controls[key]
            })
            isChangePasswordnDisabled = this.state.controls[key].valid && isChangePasswordnDisabled


        }

        return (
            <div className={styles.ForgotPasswordContainer}>
                <h3 style={{
                        'textTransform': 'uppercase',
                        'letterSpacing': '2px'
                    }}>forgotPassword</h3>
                <ForgotPassword
                    controls={controls}
                    changed={this.valueChangeHandler}
                    changePassword={this.changePasswordHandler}
                    isChangePasswordnDisabled={!isChangePasswordnDisabled}
                    loadingOtpRequest={this.props.loadingOtpRequest}
                    loadingChangePass={this.props.loadingChangePass}
                    error={this.props.error}
                    otpButtondisabled={this.state.otpButtondisabled}
                    otpButtonName={this.state.otpButtonName}
                    showPassAndOtp={this.state.showPassAndOtp}
                    sendOtpClicked={this.sendOtpHandler}
                    otpMessage={this.state.otpMessage}
                    errorChangePass={this.props.errorChangePass} />
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        loadingOtpRequest: state.forgotPassword.loadingOtpRequest,
        loadingChangePass: state.forgotPassword.loadingChangePass,
        error: state.forgotPassword.error,
        errorChangePass: state.forgotPassword.errorChangePass,
        email: state.forgotPassword.email,
        token: state.login.token,
        autoLogin: state.auth.autoLogin,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onForgotPassword: (userId) => dispatch(actionCreators.forgot_Password(userId)),
        onChangePassword: (userId, password, otp) => dispatch(actionCreators.change_Password(userId, password, otp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);