import React from 'react'
import styles from './NavigationItem.module.css'
import { NavLink, useRouteMatch } from 'react-router-dom'


export const NavigationItem = (props) => {

    let {url} = useRouteMatch()

    return (
        <li className={styles.NavigationItem}>
            <NavLink
            to ={url+'/' +props.link}
            activeClassName = {styles.active}
            exact
            >{props.navigationItem}</NavLink>
        </li>
    )
}


export default NavigationItem