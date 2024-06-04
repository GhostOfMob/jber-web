function checkPasswordStrength(password) {
    let strength = 'Weak';
    const strengthText = document.getElementById('strengthText');
    const passwordStrength = document.getElementById('passwordStrength');

    if (password.length === 0) {
        passwordStrength.style.display = 'none';
        return;
    } else {
        passwordStrength.style.display = 'block';
    }

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasNonAlphas = /[\W_]/.test(password);

    if (password.length >= 8 && hasLowerCase && hasUpperCase && hasNumbers && hasNonAlphas) {
        strength = 'Strong';
    } else if (password.length >= 6 && ((hasLowerCase && hasNumbers) || (hasUpperCase && hasNumbers) || (hasLowerCase && hasUpperCase))) {
        strength = 'Medium';
    }

    strengthText.textContent = strength;
    strengthText.style.color = strength === 'Strong' ? 'green' : (strength === 'Medium' ? 'orange' : 'red');
}

document.getElementById('registerPassword').addEventListener('input', function () {
    const password = document.getElementById('registerPassword').value;
    checkPasswordStrength(password);
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('registerPassword').value;
    const rePassword = document.getElementById('re_Password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('registerEmail').value;
    const birthMonth = document.getElementById('birthMonth').value;
    const birthDay = document.getElementById('birthDay').value;
    const birthYear = document.getElementById('birthYear').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    let isValid = true;


    document.getElementById('firstNameError').innerHTML = "";
    document.getElementById('lastNameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('rePasswordError').innerHTML = "";
    document.getElementById('birthdayError').innerHTML = "";
    document.getElementById('genderError').innerHTML = "";

    if (firstName.trim() === "") {
        document.getElementById('firstNameError').innerHTML = "First name must be filled out";
        isValid = false;
    }

    if (lastName.trim() === "") {
        document.getElementById('lastNameError').innerHTML = "Last name must be filled out";
        isValid = false;
    }

    if (email.trim() === "") {
        document.getElementById('emailError').innerHTML = "Email must be filled out";
        isValid = false;
    }

    if (password.trim() === "") {
        document.getElementById('passwordError').innerHTML = "Password must be filled out";
        isValid = false;
    }

    if (rePassword.trim() === "") {
        document.getElementById('rePasswordError').innerHTML = "Repeat password must be filled out";
        isValid = false;
    }

    if (password !== rePassword) {
        document.getElementById('rePasswordError').innerHTML = "Passwords do not match!";
        isValid = false;
    }

    if (birthMonth === "" || birthDay === "" || birthYear === "") {
        document.getElementById('birthdayError').innerHTML = "Please select your birthday";
        isValid = false;
    }

    if (!gender) {
        document.getElementById('genderError').innerHTML = "Please select your gender";
        isValid = false;
    }

    const passwordStrength = checkPasswordStrength(password);
    if (passwordStrength === 'Weak') {
        document.getElementById('passwordError').innerHTML = "Password is too weak! Please choose a stronger password.";
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');

    } else {
        alert('Please fill out all correctly.');
    }
});
