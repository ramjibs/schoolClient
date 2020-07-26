function checkValidityHandler(validationRule, value) {
    let regexTextOnly = /^[a-zA-Z ]{2,50}$/;
    let regexNumberOnly = /^[0-9]{1,10}$/;
    let regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let isValid = true
    let isToValid = true
    let errorMessage = ''
    let toErrorMessage = ''
    let date = null
    if (validationRule.required) {
        isValid = value.trim(' ') !== '' && isValid
        errorMessage = !isValid ? 'Please enter a valid value' : ''

    }
    if (validationRule.requiredArray) {
        isValid = value.length > 0 && isValid
        errorMessage = !isValid ? 'Please Select Atleast one value' : ''
    }
    if (validationRule.textOnly) {
        isValid = regexTextOnly.test(value) && isValid
        errorMessage = !isValid ? 'Should contain only letters and space' : ''
    }
    if (validationRule.numberOnly) {
        isValid = regexNumberOnly.test(value) && isValid
        errorMessage = !isValid ? 'Enter a Valid Number' : ''
    }
    if (validationRule.matchEmail) {
        isValid = regexEmail.test(value)
        errorMessage = !isValid ? 'Enter a Valid Email' : ''
    }
    if (validationRule.matchValue) {

        isValid = value === validationRule.matchWith && isValid;
        errorMessage = !isValid ? 'New Password and Confirm Password should match' : ''
    }
    if (validationRule.minLength) {
        isValid = value.length >= validationRule.minLength && isValid
        errorMessage = !isValid ? 'Minimum 8 characters required' : ''

    }

    if (validationRule.otpLength) {
        isValid = value.join('').length === 4 && isValid
    }
    if (validationRule.ageRange) {
        date = new Date(value)
        let currentYear = new Date()
        let age = currentYear.getFullYear() - date.getFullYear()

        if (age > validationRule.ageRange.lesserThan || age < validationRule.ageRange.greaterThan) {
            isValid = false
            errorMessage = 'Age should be between 18 to 65'

        }
    }

    if (validationRule.timeline && validationRule.timeline.length > 0) {
        date = new Date(value)
        let timelineArr = validationRule.timeline;
        let timelineLength = validationRule.timeline.length
        let perTimeline = null
        let toComapre = null
        for (let index = 0; index < timelineLength; index++) {
            perTimeline = timelineArr[index];
            toComapre = date.getTime()

            if (index !== validationRule.index) {
                if (perTimeline.startPeriod !== null && perTimeline.endPeriod !== null && toComapre >= perTimeline.startPeriod && toComapre <= perTimeline.endPeriod) {
                    isValid = false
                    errorMessage = 'Time Period should not clash with other time period.'

                }
                if (validationRule.by === 'from' && perTimeline.startPeriod !== null && perTimeline.endPeriod !== null && timelineArr[validationRule.index].endPeriod >= perTimeline.startPeriod && timelineArr[validationRule.index].endPeriod <= perTimeline.endPeriod) {
                    isToValid = false
                    toErrorMessage = 'Time Period should not clash with other time period.'

                }
            }



            if (index === validationRule.index) {
                if (perTimeline.startPeriod !== null && perTimeline.endPeriod === null) {

                }
                //when From is greater than To regardless of change in From and To ErrorMessage should be displayed in To
                if (perTimeline.startPeriod !== null && perTimeline.endPeriod !== null) {

                    if (validationRule.by === 'from' && perTimeline.endPeriod <= toComapre) {
                        isToValid = false
                        toErrorMessage = 'To should be greater than From.'


                    }
                    if (validationRule.by === 'to' && toComapre <= perTimeline.startPeriod) {
                        isValid = false
                        errorMessage = 'To should be greater than From.'
                    }

                    if (validationRule.by === 'from' && (perTimeline.endPeriod >= validationRule.range.lesserThan || perTimeline.endPeriod <= validationRule.range.greaterThan)) {
                        isToValid = false
                        toErrorMessage = 'Time period should be between DOB to retire age(65)'
                    }


                }
                //Message of Error should be displayed in To and should be cleard when From is Valid
                if (perTimeline.startPeriod == null) {
                    isValid = false
                    errorMessage = 'Please enter From value first'
                    break;
                }
            }


        }
        if (date.getTime() > validationRule.range.lesserThan || date.getTime() < validationRule.range.greaterThan) {
            isValid = false
            errorMessage = 'Time period should be between DOB to retire age(65)'
        }
    }

    if (validationRule.checkDOB && (validationRule.range.dob === undefined || validationRule.range.dob === null)) {
        isValid = false
        errorMessage = 'Please enter Valid Age.'
    }

    if (validationRule.currentlyWorking) {



        let timelineArr = validationRule.rules.timeline
        if (timelineArr != null && timelineArr.length > 0) {
            if (timelineArr[validationRule.index].startPeriod !== null && timelineArr[validationRule.index].startPeriod !== undefined) {
                let toCompare = timelineArr[validationRule.index].startPeriod
                for (let index = 0; index < timelineArr.length; index++) {

                    let perTimeline = timelineArr[index];

                    if (index !== validationRule.index) {
                        if (perTimeline.endPeriod !== null && perTimeline.endPeriod !== undefined && perTimeline.endPeriod !== '') {
                            if (toCompare < perTimeline.endPeriod) {
                                isValid = false
                                errorMessage = 'From should be latest than other value.'
                            }
                        }
                    }
                }
            }
            else {
                isValid = false
                errorMessage = 'Please enter value for From.'
            }

        }
        else {
            isValid = false
            errorMessage = 'Please enter value for From.'
        }


        isToValid = value ? true : false
        toErrorMessage = value ? '' : 'Please enter value for To'
        isValid = value ? isValid : true
        errorMessage = value ? errorMessage : ''


    }

    return {
        isValid,
        errorMessage,
        isToValid,
        toErrorMessage
    }
}

export default checkValidityHandler