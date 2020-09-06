import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'


 class DashboardContainer extends Component {
    
    constructor(props) {

        super(props)

        this.pathname = this.props.match.path
        this.url = this.props.match.url
    }
    render() {
        return (
            <Switch>
                <Route path={`${this.pathname}/dummy1`} render={() => <div>dummy 1 link</div>} />
                <Route path={`${this.pathname}/dummy2`} render={() => <div>dummy 2 link</div>} />
                <Route path={`${this.pathname}/dummy3`} render={() => <div>dummy 3 link</div>} />
                <Redirect path={`${this.pathname}/`} to={`${this.pathname}/dummy3`} />

            </Switch>
        )
    }
}

export default DashboardContainer