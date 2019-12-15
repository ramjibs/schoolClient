 function checkValidityHandler(validationRule, value) {
    
    let isValid = true
    let errorMessage = ''
    if (validationRule.required) {
        isValid = value.trim(' ') !== '' && isValid
        errorMessage = !isValid ? 'Please enter a valid ID' : ''

    }

    if(validationRule.matchValue){
        
        isValid = value === validationRule.matchWith && isValid;
        errorMessage = !isValid ? 'New Password and Confirm Password should match' : ''
    }
    if (validationRule.minLength) {
        isValid = value.length >= validationRule.minLength && isValid
        errorMessage = !isValid ? 'Minimum 8 characters required' : ''

    }
    
    if(validationRule.otpLength){
        isValid = value.join('').length === 4 && isValid
    }

    return {
        isValid,
        errorMessage
    }
}

export default checkValidityHandler