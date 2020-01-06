import React from 'react'
import styles from './Logo.module.css'
import logo from '../../../assets/images/logo.PNG'

export const Logo = () => {
    return (
        <div className={styles.Logo}> 
            <img  src={logo} alt ='schoolit logo'/>
        </div>
    )
}

export default Logo
