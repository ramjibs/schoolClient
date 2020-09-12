import React, { Component } from 'react'
import AddTeacherContainer from './AddTeacher/AddTeacherContainer'
import { Switch, Route, Redirect } from 'react-router'


class TeachersContainer extends Component {

    constructor(props) {

        super(props)

        this.pathname = this.props.match.path
        this.url = this.props.match.url
    }

    render() {

        return (

            <Switch>
                <Route path={`${this.pathname}/addteacher`} component={AddTeacherContainer} />
                <Route path={`${this.pathname}/dummy7`} render={() => <div>dummy 7 link</div>} />
                <Route path={`${this.pathname}/dummy8`} render={() => <div>dummy 8 link</div>} />
                <Redirect exact path={`${this.pathname}/`} to={`${this.pathname}/dummy7`} />

            </Switch>

        )
    }




}


export default TeachersContainer
