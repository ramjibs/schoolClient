import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'

export default class ExamsContainer extends Component {
    constructor(props) {

        super(props)

        this.pathname = this.props.match.path
        this.url = this.props.match.url
    }
    render() {
        return (
            <Switch>
                <Route path={`${this.pathname}/dummy15`} render={() => <div>dummy 15 link</div>} />
                <Route path={`${this.pathname}/dummy16`} render={() => <div>dummy 16 link</div>} />
                <Route path={`${this.pathname}/dummy17`} render={() => <div>dummy 17 link</div>} />
                <Redirect path={`${this.pathname}/`} to={`${this.pathname}/dummy15`} />

            </Switch>
        )
    }
}
