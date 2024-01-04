function Validation(values) {
    alert("")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") {
        error.email = "Email should not be blank"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Please enter a valid email address"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be blank"
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password did not match requirements"
    } else {
        error.password = ""
    }

    return error;
}

export default Validation;