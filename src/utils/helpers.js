
// take in a string(guest email) and checks if the email is valid
function validateEmail(email) {
    const input = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    // converts email to a string and lowercases the email to check agaist the regex to see if its a vailid email || returns true or false
    return input.test(email)
}

export default validateEmail