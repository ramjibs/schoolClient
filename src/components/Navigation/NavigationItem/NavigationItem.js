import React from 'react'
import styles from './NavigationItem.module.css'
import { NavLink, useRouteMatch } from 'react-router-dom'


const NavigationItem = (props) => {

        let { url } = useRouteMatch();
        return (
                <NavLink
                        to={`${url}/${props.componentPath}/${props.link}`}
                        className={styles.NavigationItem}
                        activeClassName={styles.NavigationItemActive}
                >{props.navName}</NavLink>
        )
}


export default NavigationItem