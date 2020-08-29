import React from 'react'
import styles from './Layout.module.css'
import axios from '../../axios-school'

class Layout extends React.Component {


    constructor(props) {
        super(props)

       this.reqInterceptors =  axios.interceptors.request.use(
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
    }
    render() {
        return (

            <div className={styles.Layout}>
                <div className={[styles.SideBar, styles.SideBarClosed].join(' ')}>
                    {this.props.sidebar}
                </div>
                <div className={[styles.PageContainer, styles.PageContainerExpand].join(' ')}>
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
