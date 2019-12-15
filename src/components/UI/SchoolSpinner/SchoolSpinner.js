import React from 'react'
import styles from './SchoolSpinner.module.css'


const schoolSpinner = (props) => {
    return (
        <div className={styles.School}>

            <div className={styles.LetterTop} ></div>
            <div className={styles.LetterBottom} ></div>
            <div className={styles.LetterTop} ></div>
            <div className={styles.LetterBottom} ></div>
            <div className={styles.LetterTop} ></div>
            <div className={styles.LetterBottom} ></div>
           
            
        </div>
    )
}

export default schoolSpinner