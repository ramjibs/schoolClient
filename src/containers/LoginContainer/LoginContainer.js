import React, { Component } from 'react'
import Login from '../../components/Login/Login'
import styles from './LoginContainer.module.css'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions'
import checkValidityHandler from '../../FormValidation/formValidation'
import NavBar from '../../components/Navigation/NavBar/NavBar'

class LoginContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {
            controls: {
                userId: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'text',
                        name: 'userid',
                        id: 'userid',
                        placeholder: 'email or user id',
                        disabled: false
                    },
                    label: 'User ID',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,
                    },
                    // animateInput:true,
                    // animateLabel: true

                },
                password: {
                    controlType: 'input',
                    controlConfig: {
                        type: 'password',
                        name: 'password',
                        id: 'password',
                        placeholder: 'your password',
                        disabled: false
                    },
                    label: 'Password',
                    value: '',
                    valid: false,
                    errorMessage: '',
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 8
                    },
                    // animateInput:true,
                    // animateLabel: true

                },

            }
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

        if (this.props.autoLogin && this.props.token && this.props.user) {

            if (this.props.location.state) {
                this.props.history.replace(this.props.location.state.from.pathname)
            }
            else {
                this.props.history.replace('/home')
            }

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

    loginHandler = (event) => {
        event.preventDefault();
        this.props.onLogin(this.state.controls.userId.value, this.state.controls.password.value)

    }

    signUpHandler = () => {
        this.props.history.push('/signup')
    }
    render() {

        let controls = []
        let isLoginDisabled = true
        for (let key in this.state.controls) {
            controls.push({
                id: key,
                control: this.state.controls[key]
            })
            isLoginDisabled = this.state.controls[key].valid && isLoginDisabled


        }


        return (

            <div className={styles.LoginContainer}>
                <NavBar
                    navigation={this.navigation}
                />
                <h5 className={styles.Title}>login</h5>
                <Login
                    controls={controls}
                    changed={this.valueChangeHandler}
                    login={this.loginHandler}
                    isLoginDisabled={!isLoginDisabled}
                    loading={this.props.loading}
                    error={this.props.error}
                    signUp={this.signUpHandler}
                />
            </div>



        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.login.loading,
        error: state.login.error,
        token: state.login.token,
        autoLogin: state.auth.autoLogin,
        user: state.auth.user
    }
}




const mapDispatchToProps = dispatch => {
    return {
        onLogin: (userid, password) => dispatch(actionCreators.login(userid, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
