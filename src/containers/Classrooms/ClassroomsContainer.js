import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'

export default class ClassroomsContainer extends Component {

    constructor(props) {

        super(props)

        this.pathname = this.props.match.path
        this.url = this.props.match.url
    }
    render() {
        return (
            <Switch>
                <Route path={`${this.pathname}/dummy9`} render={() => <div>dummy 9 link</div>} />
                <Route path={`${this.pathname}/dummy10`} render={() => <div>dummy 10 link</div>} />
                <Route path={`${this.pathname}/dummy11`} render={() => <div>dummy 11 link</div>} />
                <Redirect path={`${this.pathname}/`} to={`${this.pathname}/dummy9`} />

            </Switch>
        )
    }
}
