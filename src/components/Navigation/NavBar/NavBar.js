import React from 'react'
import styles from './NavBar.module.css'
import { NavLink} from 'react-router-dom'

const NavBar = (props)=>{
    return (
        <div className={styles.NavBarContainer}>

            {props.navigation.map(navObj =>{
                return <NavLink 
                        to = {navObj.headLink}
                        className={styles.NavBarItem}
                        activeClassName={styles.NavigationItemActive}
                >{navObj.navHead}</NavLink>
            })}
        </div>
    )
}

export default NavBar