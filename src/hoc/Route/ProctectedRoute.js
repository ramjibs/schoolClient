import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
export default  function ProctectedRoute({component: Component, authenticationStatus, authToken, authLoading, authUser, authError,...rest})  {
    return (
        <Route 
        {...rest}
        render ={(routerProps) => !authenticationStatus & (authError === 'Network Error' || authError === 'Unauthorized' ) & !authLoading ? 
        <Redirect to={{pathname: '/login', state: {from: routerProps.location}}} /> : authenticationStatus  && authToken && !authLoading && authUser ?
        <Component {...routerProps} /> : <Loader />}
        />
    )
}
