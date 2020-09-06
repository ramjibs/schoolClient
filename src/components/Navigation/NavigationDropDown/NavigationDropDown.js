import React, { Component } from 'react'
import styles from './NavigationDropDown.module.css'
import NavigationItem from '../NavigationItem/NavigationItem'
class NavigationDropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showNavItems: false,
            dynamicStyles: [styles.NavBoxContainer],
            dynamicStylesDropDownItems: [styles.DropDownItems]
        }
        this.NavContainer = React.createRef();
        this.onClickOutsideNavigation = this.onClickOutsideNavigation.bind(this)
        this.showOrHideDropDown = this.showOrHideDropDown.bind(this)
    }

    onClickOutsideNavigation(event) {

        if (this.state.showNavItems && !this.NavContainer.current.contains(event.target)) {
            let updatedState = {
                ...this.state
            }
            updatedState.dynamicStylesDropDownItems.splice(1, 1)
            updatedState.dynamicStyles.splice(1, 1)

            updatedState.showNavItems = false
            this.setState({
                ...updatedState
            });

        }
    }

    showOrHideDropDown() {

        let updatedState = {
            ...this.state
        }

        if (!updatedState.showNavItems) {
            updatedState.dynamicStylesDropDownItems.push(styles.ShowDropDownItems)
            updatedState.dynamicStyles.push(styles.NavBoxContainerExpanded)
            updatedState.showNavItems = true
        }
        else {
            updatedState.dynamicStylesDropDownItems.splice(1, 1)
            updatedState.dynamicStyles.splice(1, 1)

            updatedState.showNavItems = false
        }

        this.setState({
            ...updatedState
        });

    }
    componentDidMount() {

        window.addEventListener('click', this.onClickOutsideNavigation)

    }

    UNSAFE_componentWillMount() {
        window.removeEventListener('click', this.onClickOutsideNavigation)

    }
    render() {

        return (
            <div
                ref={this.NavContainer}
                className={this.state.dynamicStyles.join(' ')}
                onClick={this.showOrHideDropDown}>
                <div className={styles.NavBoxDisplay}>
                    <div
                        className={styles.NavBox}

                    >
                        {this.props.title}
                    </div>
                    <div

                        className={styles.DropDownBox}>
                        <div
                            className={this.state.showNavItems ? styles.ArrowUp : styles.ArrowDown}

                        ></div>
                    </div>

                </div>


                {<div className={this.state.dynamicStylesDropDownItems.join(' ')}>
                    {this.props.items.map((item, index) => {
                        return (
                            <NavigationItem
                                key={item}
                                componentPath={this.props.titleLink}
                                link={this.props.itemsLink[index]}
                                navName={item}
                            />
                        )
                    })}
                </div>}
            </div>
        )
    }
}


export default NavigationDropDown