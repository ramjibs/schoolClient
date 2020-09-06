import React, { Component, Suspense, lazy } from 'react';
import AutoLoginContainer from './containers/AutoLoginContainer/AutoLoginContainer';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loader from './components/UI/Loader/Loader'
import ErrorBoundry from './components/UI/Error/ErrorBoundry'
import * as actionCreators from './store/actions'
import { retry } from './utility/RetryChunk'
import ProtectedRoute from './hoc/Route/ProctectedRoute'
const Login = lazy(() => retry(() => import('./containers/LoginContainer/LoginContainer')))
const ForgotPassword = lazy(() => retry(() => import('./containers/ForgotPassword/ForgotPasswordContainer')))
const Signup = lazy(() => retry(() => import('./containers/SignupContainer/SignupContainer')))
const Home = lazy(() => retry(() => import('./containers/HomeContainer/HomeContainer')))


class App extends Component {


  constructor(props) {
    super(props)
    let token = localStorage.getItem('token')
    this.props.onAuth(token)

  }

  render() {

    return (
      <ErrorBoundry>
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route path='/' exact component={AutoLoginContainer} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/signup' component={Signup} />
            <ProtectedRoute
              component={Home}
              authenticationStatus={this.props.autoLogin}
              authToken={this.props.token}
              authLoading={this.props.loading}
              authUser={this.props.user}
              authError={this.props.error}
              path='/home' />
            {/* <Redirect path='/*' to='/' /> */}
          </Suspense>
        </Switch>
      </ErrorBoundry>
    )
  }
}

const mapStateToProps = state => {
  return {
    autoLogin: state.auth.autoLogin,
    error: state.auth.error,
    token: state.login.token,
    loading: state.auth.loading,
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (token) => dispatch(actionCreators.auth(token)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

