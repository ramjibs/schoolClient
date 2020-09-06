import React from 'react'
import styles from './Layout.module.css'
import axios from '../../axios-school'

class Layout extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            showSideBar: true
        }
        this.reqInterceptors = axios.interceptors.request.use(
            request => {
                const token = localStorage.getItem('token')

                if (token) {

                    request.headers["Authorization"] = token
                }
                return request

            },
            error => {
                Promise.reject(error)
            }
        )

        this.openOrCloseSideBar = this.openOrCloseSideBar.bind(this)

    }

    openOrCloseSideBar() {

        this.setState(previousState => {
            return {
                showSideBar: !previousState.showSideBar
            }
        })



    }

    render() {
        return (

            <div className={styles.Layout}>
                <div
                    className={this.state.showSideBar ? styles.SideBar : [styles.SideBar, styles.SideBarClosed].join(' ')}>
                    {this.state.showSideBar ? <div className={styles.SideBarHeader}>
                        <div className={styles.AppName}>
                            {this.props.AppName}
                        </div>
                        <div
                            className={styles.SideBarMenuContainer}
                            onClick={this.openOrCloseSideBar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div> : <div
                            className={styles.SideBarMenuContainer}
                            onClick={this.openOrCloseSideBar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    }
                    {this.props.sidebar}
                    
                </div>
                <div className={this.state.showSideBar ? styles.PageContainer : [styles.PageContainer, styles.PageContainerExpand].join(' ')}>
                    {this.props.children}
                </div>
            </div>



        )
    }


    componentWillUnmount() {
        axios.interceptors.request.eject(this.reqInterceptors)
        // axios.interceptors.response.eject(this.resInterceptors)
    }
}


export default Layout
