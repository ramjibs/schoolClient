import React, { Component, Suspense, lazy } from 'react';
import AutoLoginContainer from './containers/AutoLoginContainer/AutoLoginContainer';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Loader from './components/UI/Loader/Loader'
import ErrorBoundry from './components/UI/Error/ErrorBoundry'
import { retry } from './utility/RetryChunk'
const Login = lazy(() => retry(() => import('./containers/LoginContainer/LoginContainer')))
const ForgotPassword = lazy(() => retry(() => import('./containers/ForgotPassword/ForgotPasswordContainer')))
const Signup = lazy(() =>retry(() => import('./containers/SignupContainer/SignupContainer')))
const Home = lazy(() => retry(() => import('./containers/HomeContainer/HomeContainer')))


class App extends Component {

  

  render() {

    return (
      <ErrorBoundry>
        <Switch>
          <Suspense fallback={<Loader />}>
           
            <Route exact path='/login'   component={Login} />
            <Route exact path='/forgot-password'   component={ForgotPassword} />
            <Route exact  path='/signup'   component={Signup} />
            {/* <Route   path='/home'   component={Home} /> */}
            {this.props.autoLogin ? <Route path='/home'  component={Home} /> : null}
            <Route path='/' exact component={AutoLoginContainer} />
          </Suspense>
        </Switch>
      </ErrorBoundry>
    )
  }
}

const mapStateToProps = state => {
  return {
    autoLogin: state.auth.autoLogin,
  }
}



export default connect(mapStateToProps)(App);

