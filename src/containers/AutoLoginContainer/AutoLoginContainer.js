import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../../components/UI/Loader/Loader'
import * as actionCreators from '../../store/actions'
class AutoLoginContainer extends Component {

    componentDidUpdate() {
        if (!this.props.autoLogin & this.props.error === 'Unauthorized' & !this.props.loading) {
          
            this.props.history.push('/login')
        }
        if (this.props.autoLogin && this.props.token && !this.props.loading) {
            
            this.props.history.replace('/home')
        }
    }

    componentDidMount() {
        
        let token = localStorage.getItem('token')
        this.props.onAuth(token)
       
    }
    render() {

        return (
            <Loader />
        )
    }
}



const mapStateToProps = state => {
    return {
        
        error: state.auth.error,
        token: state.login.token,
        autoLogin: state.auth.autoLogin,
        loading: state.auth.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (token) => dispatch(actionCreators.auth(token)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AutoLoginContainer)
