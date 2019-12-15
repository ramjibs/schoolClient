import React from 'react'
import styles from './Loader.module.css'

const loader = props => {
    return (
        <div className={styles.spinnerbox}>
            <div className={styles.configureborder1}>
                <div className={styles.configurecore}></div>
            </div>
            <div className={styles.configureborder2}>
                <div className={styles.configurecore}></div>
            </div>
        </div>
    )
}


export default loader
