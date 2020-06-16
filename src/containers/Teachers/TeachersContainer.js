import React, { Component } from 'react'
import AddTeacherContainer from './AddTeacher/AddTeacherContainer'
import {Switch, Route} from 'react-router'


class TeachersContainer extends Component {

   constructor(props){

        super(props)

         this.pathname = this.props.match.path
         this.url = this.props.match.url
   }

    render() {

        return (
            <div>
                <Switch>
                    <Route path={`${this.pathname}/addteacher`} component={AddTeacherContainer}/>
                </Switch>
            </div>
        )
    }

    componentDidMount(){

         this.props.history.push(`${this.url}/addteacher`)
    }

    


}


export default TeachersContainer
