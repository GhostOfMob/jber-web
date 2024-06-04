function validateForm() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    let emailError = document.getElementById('emailErrors');
    let passwordError = document.getElementById('passwordErrors');

    let isValid = true;

    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    document.getElementById('alert').style.display = 'none';

    // need to Validate if user use real email format
    if (email.trim() === "") {
        emailError.innerHTML = "Email must be filled out";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.innerHTML = "Please enter a valid email address";
        isValid = false;
    }

    // Validate the password
    if (password.trim() === "") {
        passwordError.innerHTML = "Password must be filled out";
        isValid = false;
    }

    if (!isValid) {
        document.getElementById('alert').style.display = 'block';
    }

    return isValid;
}

function validateEmail(email) {
    // email @ para maverify kung email ang gamit
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
