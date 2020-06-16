import React from 'react'
import styles from './MultipleSelect.module.css'


class MultipleSelect extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            showItemList: false,
            itemsList: this.props.items || [],
            selectedValues: [],
            selectedId: [],
            dynamicStyles: [styles.SelectBox],
            dynamicStylesDropDownBox:[styles.DropDownBox]


        }

        this.showOrHideDropDown = this.showOrHideDropDown.bind(this)
        this.selectOrDeselectItem = this.selectOrDeselectItem.bind(this)

    }


    selectOrDeselectItem(item) {

        let updatedState = {
            ...this.state
        }

        let newselectedValues = updatedState.selectedValues
        let newSelectedId = updatedState.selectedId



        if (newselectedValues.length > 0) {
            let index = newselectedValues.indexOf(item.value)

            if (index >= 0) {
                newselectedValues.splice(index, 1)
                newSelectedId.splice(index, 1)
            }
            else {
                newSelectedId.push(item.id)
                newselectedValues.push(item.value)
            }
        }
        else {
            newSelectedId.push(item.id)
            newselectedValues.push(item.value)
        }
        updatedState.selectedValues = newselectedValues
        updatedState.selectedId = newSelectedId




        this.setState({
            ...updatedState
        })

        this.props.valueChanged({
            target: {
                value: this.state.selectedId
            }
        })




    }


    showOrHideDropDown() {

        let updatedState = {
            ...this.state
        }
        if (!updatedState.showItemList) {

            updatedState.dynamicStyles.push(styles.SelectBoxFocused)
            updatedState.dynamicStylesDropDownBox.push(styles.DropDownBoxFocused)

            if (this.props.touched && !this.props.valid) {
                updatedState.dynamicStyles.push(styles.InValidSelectBoxFocused)
                updatedState.dynamicStylesDropDownBox.push(styles.InValidDropDownBoxFocused)
            }
        }
        else {

            let index = updatedState.dynamicStyles.indexOf(styles.SelectBoxFocused)
            updatedState.dynamicStyles.splice(index, 1)
            updatedState.dynamicStylesDropDownBox.splice(index,1)

            if (this.props.touched && this.props.valid && updatedState.dynamicStyles.includes(styles.InValidSelectBoxFocused)) {
                index = updatedState.dynamicStyles.indexOf(styles.InValidSelectBoxFocused)
                updatedState.dynamicStyles.splice(index, 1)
                updatedState.dynamicStylesDropDownBox.splice(index,1)
            }
        }
        updatedState.showItemList = !updatedState.showItemList
        this.setState({
            ...updatedState
        })


    }

    static getDerivedStateFromProps(nextProps, prevState) {



        if (nextProps.touched && !nextProps.valid) {

            let newDyanamicStyle = prevState.dynamicStyles
            let newDyanamicStyleDropDownBox = prevState.dynamicStylesDropDownBox

            if (!newDyanamicStyle.includes(styles.InValidSelectBox)) {
                newDyanamicStyle.push(styles.InValidSelectBox)
                newDyanamicStyleDropDownBox.push(styles.InValidDropDownBox)
                return {
                    dynamicStyles: newDyanamicStyle,
                    dynamicStylesDropDownBox: newDyanamicStyleDropDownBox
                }
            }
            else {
                return null
            }

        }
        else if (nextProps.touched && nextProps.valid) {

            let newDyanamicStyle = prevState.dynamicStyles
            let newDyanamicStyleDropDownBox = prevState.dynamicStylesDropDownBox

            if (newDyanamicStyle.includes(styles.InValidSelectBox)) {
                let index = newDyanamicStyle.indexOf(styles.InValidSelectBox)

                if (newDyanamicStyle.includes(styles.InValidSelectBoxFocused)) {
                    let indexOfInvalidSelectBoxFocused = newDyanamicStyle.indexOf(styles.InValidSelectBoxFocused)
                    newDyanamicStyle.splice(indexOfInvalidSelectBoxFocused, 1)
                    newDyanamicStyleDropDownBox.splice(indexOfInvalidSelectBoxFocused,1)
                }
                newDyanamicStyle.splice(index, 1)
                newDyanamicStyleDropDownBox.splice(index,1)
                return {
                    dynamicStyles: newDyanamicStyle,
                    dynamicStylesDropDownBox: newDyanamicStyleDropDownBox
                }
            }
            else {
                return null
            }
        }
        else {
            return null
        }
    }

    // componentDidUpdate(prevProps, prevState){

    //     if(prevState.dynamicStyles !== this.state.dynamicStyles){
    //         let newDyanamicStyle = [
    //             ...this.state.dynamicStyles
    //         ]
    //         this.setState({
    //             dynamicStyles: newDyanamicStyle
    //         })
    //     }
    // }




    render() {
        return (
            <div
                className={styles.SelectBoxContainer}
                disabled={this.props.controlConfig.disabled}
                id={this.props.controlConfig.id}
                name={this.props.controlConfig.name}>
                <div className={styles.SelectDisplayBox}>
                    <div
                        className={this.state.dynamicStyles.join(' ')}
                        onClick={this.showOrHideDropDown}>
                        {this.state.selectedValues.length > 0 ? this.state.selectedValues.join(',') : this.props.controlConfig.placeholder}
                    </div>
                    <div className={this.state.dynamicStylesDropDownBox.join(' ')}>
                        <div
                            className={this.state.showItemList ? styles.SelectBoxUp : styles.SelectBoxDown}
                            onClick={this.showOrHideDropDown}
                        ></div>
                    </div>

                </div>


                {this.state.showItemList ? <div className={styles.DropDown}>
                    {this.props.items.map(item => {
                        return (
                            <div
                                className={this.state.selectedValues.includes(item.value) ? [styles.ItemList, styles.selected].join(' ') : styles.ItemList}
                                key={item.id}
                                onClick={() => this.selectOrDeselectItem(item)}
                            >{item.value} </div>
                        )
                    })}
                </div> : null}
            </div>





        )

    }

}


export default MultipleSelect