import React from 'react'
import styles from './SideBar.module.css'
import NavigationDropDown from '../NavigationDropDown/NavigationDropDown'

const SideBar = (props) => {

    return (
        <div className={styles.SideBarContainer}>
            {props.navigation.map((navObj,index) => (
                <NavigationDropDown
                    key={index}
                    title={navObj.navHead}
                    titleLink={navObj.headLink}
                    items= {navObj.navChilds}
                    itemsLink={navObj.childsLink}
                />
            ))}
        </div>
    )
}


export default SideBar