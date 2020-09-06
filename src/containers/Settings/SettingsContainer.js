import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'

export default class SettingsContainer extends Component {
    constructor(props) {

        super(props)

        this.pathname = this.props.match.path
        this.url = this.props.match.url
    }
    render() {
        return (
            <Switch>
                <Route path={`${this.pathname}/dummy21`} render={() => <div>dummy 21 link</div>} />
                <Route path={`${this.pathname}/dummy22`} render={() => <div>dummy 22 link</div>} />
                <Route path={`${this.pathname}/dummy23`} render={() => <div>dummy 23 link</div>} />
                <Redirect path={`${this.pathname}/`} to={`${this.pathname}/dummy21`} />

            </Switch>
        )
    }
}
