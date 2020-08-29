import React from 'react'
import styles from './SideBar.module.css'
import { NavLink, useRouteMatch } from 'react-router-dom'

const SideBar = (props) => {

    let { path } = useRouteMatch()

    return (
        <div className={styles.SideBarContainer}>
            {props.navigationMenus.map(menu => (
                <NavLink
                    to={path + '/' + menu}
                    className={styles.SideBarNavigation}
                    activeClassName={styles.ActiveNavigation}
                >{menu}</NavLink>
            ))}
        </div>
    )
}


export default SideBar