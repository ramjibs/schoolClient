import React, { Component, Suspense, lazy } from 'react'
import Layout from '../../hoc/Layout/Layout'
import { Route, Switch, Redirect } from 'react-router-dom'
import ErrorBoundry from '../../components/UI/Error/ErrorBoundry'
import Loader from '../../components/UI/Loader/Loader'
import DashboardContainer from '../Dashboard/DashboardContainer'
import { retry } from '../../utility/RetryChunk'
import * as actionCreators from '../../store/actions'
import { connect } from 'react-redux'
import SideBar from '../../components/Navigation/SideBar/SideBar'
const TeachersContainer = lazy(() => retry(() => import('../Teachers/TeachersContainer')))
const StudentsContainer = lazy(() => retry(() => import('../Students/StudentsContainer')))
const ClassroomsContainer = lazy(() => retry(() => import('../Classrooms/ClassroomsContainer')))
const TimetableContainer = lazy(() => retry(() => import('../Timetable/TimetableContainer')))
const ExamsContainer = lazy(() => retry(() => import('../Exams/ExamsContainer')))
const ReportsContainer = lazy(() => retry(() => import('../Reports/ReportsContainer')))
const SettingsContainer = lazy(() => retry(() => import('../Settings/SettingsContainer')))
const LogoutContainer = lazy(() => retry(() => import('../Logout/LogoutContainer')))


class HomeContainer extends Component {



    constructor(props) {

        super(props)
        this.pathname = this.props.match.path
        this.url = this.props.match.url
        this.navigation = [
            {   


                navHead: 'dashboard',
                headLink: 'dashboard',
                navChilds: [
                    'dummy1', 'dummy2', 'dummy3'
                ],
                childsLink:[
                    'dummy1', 'dummy2', 'dummy3'
                ]
            },
            {
                navHead: 'teachers',
                headLink: 'teachers',
                navChilds: [
                    'dummy7', 'add teacher', 'dummy8'
                ],
                childsLink:[
                    'dummy7', 'addteacher', 'dummy8'
                ]
            },
            {
                navHead: 'students',
                headLink: 'students',
                navChilds: [
                    'dummy4', 'dummy5', 'dummy90'
                ],
                childsLink:[
                    'dummy4', 'dummy5', 'dummy90'
                ]
            },
            {
                navHead: 'classrooms',
                headLink: 'classrooms',
                navChilds: [
                    'dummy9', 'dummy10', 'dummy11'
                ],
                childsLink:[
                    'dummy9', 'dummy10', 'dummy11'
                ]
            },
            {
                navHead: 'time table',
                headLink: 'timetable',
                navChilds: [
                    'dummy12', 'dummy13', 'dummy14'
                ],
                childsLink:[
                    'dummy12', 'dummy13', 'dummy14'
                ]
            },
            {
                navHead: 'exam',
                headLink: 'exam',
                navChilds: [
                    'dummy15', 'dummy16', 'dummy17'
                ],
                childsLink:[
                    'dummy15', 'dummy16', 'dummy17'
                ]
            },
            {
                navHead: 'reports',
                headLink: 'reports',
                navChilds: [
                    'dummy18', 'dummy19', 'dummy20'
                ],
                childsLink:[
                    'dummy18', 'dummy19', 'dummy20'
                ]
            },
            {
                navHead: 'settings',
                headLink: 'settings',
                navChilds: [
                    'dummy21', 'dummy22', 'dummy23'
                ],
                childsLink:[
                    'dummy21', 'dummy22', 'dummy23'
                ]
            },
            {
                navHead: 'logout',
                headLink: 'logout',
                navChilds: [
                    'dummy24', 'dummy25', 'dummy26'
                ],
                childsLink:[
                    'dummy24', 'dummy25', 'dummy26'
                ]
            },
        ]

        this.routes = (

            <Suspense fallback={<Loader />} >
                <Switch>
                    <Route path={`${this.pathname}/dashboard`} render={(routeProps) =>
                        <ErrorBoundry key={'dashboard'}>
                            <DashboardContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/teachers`} render={(routeProps) =>
                        <ErrorBoundry key={'teacher'}>
                            <TeachersContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/students`} render={(routeProps) =>
                        <ErrorBoundry key={'students'}>
                            <StudentsContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/classrooms`} render={(routeProps) =>
                        <ErrorBoundry key={'classrooms'}>
                            <ClassroomsContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/timetable`} render={(routeProps) =>
                        <ErrorBoundry key={'timetable'}>
                            <TimetableContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/exams`} render={(routeProps) =>
                        <ErrorBoundry key={'exams'}>
                            <ExamsContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/reports`} render={(routeProps) =>
                        <ErrorBoundry key={'reports'}>
                            <ReportsContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/settings`} render={(routeProps) =>
                        <ErrorBoundry key={'settings'}>
                            <SettingsContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/logout`} render={(routeProps) =>
                        <ErrorBoundry key={'logout'}>
                            <LogoutContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Redirect exact path={`${this.pathname}/`} to={`${this.pathname}/teachers`}/>
                    
                </Switch>
            </Suspense>

        )




    }

    componentDidMount() {
       
        this.props.onRequestAllSubjects()
        this.props.onRequestAllStates()
        this.props.onRequestAllCategories()



    }

    render() {


        return (

            <Layout
                AppName={'Schoolit'}
                sidebar={
                    <SideBar navigation={this.navigation} />
                }>
                {this.routes}
            </Layout>

        )
    }
}




const MapDispatchToProps = dispatch => {
    return {
        onRequestAllSubjects: () => dispatch(actionCreators.getAllSubjects()),
        onRequestAllStates: () => dispatch(actionCreators.getAllStates()),
        onRequestAllCategories: () => dispatch(actionCreators.getAllCategory())

    }
}

export default connect(null, MapDispatchToProps)(HomeContainer)

