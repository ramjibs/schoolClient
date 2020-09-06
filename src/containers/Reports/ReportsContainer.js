import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'

export default class ReportsContainer extends Component {
    constructor(props) {

        super(props)

        this.pathname = this.props.match.path
        this.url = this.props.match.url
    }
    render() {
        return (
            <Switch>
                <Route path={`${this.pathname}/dummy18`} render={() => <div>dummy 18 link</div>} />
                <Route path={`${this.pathname}/dummy19`} render={() => <div>dummy 19 link</div>} />
                <Route path={`${this.pathname}/dummy20`} render={() => <div>dummy 20 link</div>} />
                <Redirect path={`${this.pathname}/`} to={`${this.pathname}/dummy18`} />

            </Switch>
        )
    }
}
