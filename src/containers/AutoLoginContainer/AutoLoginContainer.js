import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../../components/UI/Loader/Loader'
class AutoLoginContainer extends Component {

    componentDidUpdate() {
        if (!this.props.autoLogin & (this.props.error === 'Network Error' || this.props.error === 'Unauthorized' ) & !this.props.loading) {
          
            this.props.history.replace('/login')
        }
        else if (this.props.autoLogin && this.props.token && !this.props.loading && this.props.user) {
            
            this.props.history.replace('/home')
        }
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
        loading: state.auth.loading,
        user: state.auth.user
    }
}





export default connect(mapStateToProps)(AutoLoginContainer)
