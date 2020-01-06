import React from 'react'
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

export const NavigationItems = (props) => {

    const items = ['dashboard','teachers', 'students', 'classrooms', 'timetable', 'exams', 'reports', 'settings', 'logout' ]
    const navigationItems = items.map(item => {
        return (
            <NavigationItem
            key={item}
            link = {item}
            navigationItem ={item}
            />
        )
    })

    return (
        <ul className={styles.NavigationItems}>
            {navigationItems}            
        </ul>
    )
}


export default NavigationItems