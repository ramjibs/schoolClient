import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../NavigationItems'

export const Toolbar = (props) => {
    return (
        <>
            <div >
                <Logo />
            </div>
            <nav className={styles.Navigations}>
                <NavigationItems />
            </nav>
        </>

    )
}


export default Toolbar