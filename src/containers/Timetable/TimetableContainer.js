import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'

export default class TimetableContainer extends Component {
    constructor(props) {

        super(props)

        this.pathname = this.props.match.path
        this.url = this.props.match.url
    }
    render() {
        return (
            <Switch>
                <Route path={`${this.pathname}/dummy12`} render={() => <div>dummy 12 link</div>} />
                <Route path={`${this.pathname}/dumm13`} render={() => <div>dummy 13 link</div>} />
                <Route path={`${this.pathname}/dummy14`} render={() => <div>dummy 14 link</div>} />
                <Redirect path={`${this.pathname}/`} to={`${this.pathname}/dummy12`} />

            </Switch>
        )
    }
}
