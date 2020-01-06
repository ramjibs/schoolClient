import React from 'react'
import styles from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

class Layout extends React.Component {

    render() {
        return (

            <div className={styles.Layout}>
                <div className={styles.Toolbar}>
                    <Toolbar />
                </div>
                <div className={styles.Pages}>
                    {this.props.children}
                </div>
            </div>



        )
    }
}


export default Layout
