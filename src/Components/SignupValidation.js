function Validation(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!values.firstName.trim()) {
        errors.firstName = "First Name should not be empty";
    } else {
        errors.firstName = "";
    }

    if (!values.lastName.trim()) {
        errors.lastName = "Last Name should not be empty";
    } else {
        errors.lastName = "";
    }

    if (!values.email.trim()) {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email.trim())) {
        errors.email = "Invalid email format";
    } else {
        errors.email = "";
    }

    if (!values.password.trim()) {
        errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password.trim())) {
        errors.password = "Password must contain at least 8 characters, including one number, one lowercase and one uppercase letter";
    } else {
        errors.password = "";
    }

    return errors;
}

export default Validation;
