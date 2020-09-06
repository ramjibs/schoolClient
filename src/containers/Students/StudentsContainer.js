import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'

export default class StudentsContainer extends Component {
    constructor(props) {

        super(props)

        this.pathname = this.props.match.path
        this.url = this.props.match.url
    }
    render() {
        return (
            <Switch>
                <Route path={`${this.pathname}/dummy4`} render={() => <div>dummy 4 link</div>} />
                <Route path={`${this.pathname}/dummy5`} render={() => <div>dummy 5 link</div>} />
                <Route path={`${this.pathname}/dummy90`} render={() => <div>dummy 90 link</div>} />
                <Redirect path={`${this.pathname}/`} to={`${this.pathname}/dummy4`} />

            </Switch>
        )
    }
}
