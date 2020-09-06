import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'

export default class LogoutContainer extends Component {
    constructor(props) {

        super(props)

        this.pathname = this.props.match.path
        this.url = this.props.match.url
    }
    render() {
        return (
            <Switch>
                <Route path={`${this.pathname}/dummy24`} render={() => <div>dummy 24 link</div>} />
                <Route path={`${this.pathname}/dummy25`} render={() => <div>dummy 25 link</div>} />
                <Route path={`${this.pathname}/dummy26`} render={() => <div>dummy 26 link</div>} />
                <Redirect path={`${this.pathname}/`} to={`${this.pathname}/dummy24`} />

            </Switch>
        )
    }
}
