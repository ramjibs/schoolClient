import React, { Component, Suspense, lazy } from 'react'
import Layout from '../../hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import ErrorBoundry from '../../components/UI/Error/ErrorBoundry'
import Loader from '../../components/UI/Loader/Loader'
import DashboardContainer from '../Dashboard/DashboardContainer'
import { retry } from '../../utility/RetryChunk'
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
        this.pathname = this.props.history.location.pathname

        this.routes = (

            <Suspense fallback={<Loader />} >
                <Switch>
                    <Route path={`${this.pathname}/dashboard`} exact render={() =>
                        <ErrorBoundry key={'dashboard'}>
                            <DashboardContainer />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/teachers`} exact render={() =>
                        <ErrorBoundry key={'teachers'}>
                            <TeachersContainer />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/students`} exact render={() =>
                        <ErrorBoundry key={'students'}>
                            <StudentsContainer />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/classrooms`} exact render={() =>
                        <ErrorBoundry key={'classrooms'}>
                            <ClassroomsContainer />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/timetable`} exact render={() =>
                        <ErrorBoundry key={'timetable'}>
                            <TimetableContainer />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/exams`} exact render={() =>
                        <ErrorBoundry key={'exams'}>
                            <ExamsContainer />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/reports`} exact render={() =>
                        <ErrorBoundry key={'reports'}>
                            <ReportsContainer />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/settings`} exact render={() =>
                        <ErrorBoundry key={'settings'}>
                            <SettingsContainer />
                        </ErrorBoundry>} />
                    <Route path={`${this.pathname}/logout`} exact render={() =>
                        <ErrorBoundry key={'logout'}>
                            <LogoutContainer />
                        </ErrorBoundry>} />
                </Switch>
            </Suspense>



        )


    }

    componentDidMount() {
        this.props.history.push(`${this.pathname}/classrooms`)
    }

    render() {


        return (

            <Layout >
                {this.routes}
            </Layout>

        )
    }
}


export default HomeContainer
