import React, { Component, Suspense, lazy } from 'react'
import Layout from '../../hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
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
        this.navigationMenus = ['dashboard','teachers', 'students', 'classrooms', 'timetable', 'exams', 'reports', 'settings', 'logout' ]

        this.routes = (

            <Suspense fallback={<Loader />} >
                <Switch>
                    <Route path={`${this.pathname}/dashboard`} render={(routeProps) =>
                        <ErrorBoundry key={'dashboard'}>
                            <DashboardContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/teachers`} render={(routeProps) =>
                        <ErrorBoundry key ={'teacher'}>
                            <TeachersContainer {...routeProps}/>
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/students`} render={(routeProps) =>
                        <ErrorBoundry key={'students'}>
                            <StudentsContainer {...routeProps} />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/classrooms`} render={(routeProps) =>
                        <ErrorBoundry key={'classrooms'}>
                            <ClassroomsContainer {...routeProps}/>
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/timetable`} render={(routeProps) =>
                        <ErrorBoundry key={'timetable'}>
                            <TimetableContainer {...routeProps}/>
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/exams`} render={(routeProps) =>
                        <ErrorBoundry key={'exams'}>
                            <ExamsContainer {...routeProps}/>
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/reports`} render={(routeProps) =>
                        <ErrorBoundry key={'reports'}>
                            <ReportsContainer {...routeProps}/>
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/settings`} render={(routeProps) =>
                        <ErrorBoundry key={'settings'}>
                            <SettingsContainer {...routeProps}/>
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/logout`} render={(routeProps) =>
                        <ErrorBoundry key={'logout'}>
                            <LogoutContainer {...routeProps}/>
                        </ErrorBoundry>} />


                </Switch>
            </Suspense>

        )

        


    }

    componentDidMount() {

        this.props.history.push(`${this.url}/teachers`)
        this.props.onRequestAllSubjects()
        this.props.onRequestAllStates()
        this.props.onRequestAllCategories()
        


    }

    render() {


        return (

            <Layout sidebar={<SideBar navigationMenus = {this.navigationMenus} />}>
                {this.routes}
            </Layout>

        )
    }
}


// const MapStateToProps = state => {
//     return {
//         subjects: state.resource.subjects,
//         states: state.resource.states
//     }
// }

const MapDispatchToProps = dispatch => {
    return {
        onRequestAllSubjects: () => dispatch(actionCreators.getAllSubjects()),
        onRequestAllStates: () => dispatch(actionCreators.getAllStates()),
        onRequestAllCategories: () => dispatch(actionCreators.getAllCategory())

    }
}

export default connect(null, MapDispatchToProps)(HomeContainer)

