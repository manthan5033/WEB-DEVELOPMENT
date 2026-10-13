
const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const strengthBar = document.getElementById("strengthBar");


// Regular Expressions

// Name: letters and spaces only
const nameRegex = /^[A-Za-z ]{2,50}$/;

// Email validation
const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Indian mobile number: starts with 6-9 and contains 10 digits
const mobileRegex = /^[6-9][0-9]{9}$/;

// Strong password
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// Function to display error
function showError(input, errorId, message) {

    input.classList.remove("valid");
    input.classList.add("invalid");

    document.getElementById(errorId).textContent = message;
}


// Function to display success
function showValid(input, errorId) {

    input.classList.remove("invalid");
    input.classList.add("valid");

    document.getElementById(errorId).textContent = "";
}


// Validate Name
function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {
        showError(
            nameInput,
            "nameError",
            "Name is required."
        );
        return false;
    }

    if (!nameRegex.test(name)) {
        showError(
            nameInput,
            "nameError",
            "Name must contain only letters and spaces."
        );
        return false;
    }

    showValid(nameInput, "nameError");
    return true;
}


// Validate Email
function validateEmail() {

    const email = emailInput.value.trim();

    if (email === "") {
        showError(
            emailInput,
            "emailError",
            "Email is required."
        );
        return false;
    }

    if (!emailRegex.test(email)) {
        showError(
            emailInput,
            "emailError",
            "Please enter a valid email address."
        );
        return false;
    }

    showValid(emailInput, "emailError");
    return true;
}


// Validate Mobile
function validateMobile() {

    const mobile = mobileInput.value.trim();

    if (mobile === "") {
        showError(
            mobileInput,
            "mobileError",
            "Mobile number is required."
        );
        return false;
    }

    if (!mobileRegex.test(mobile)) {
        showError(
            mobileInput,
            "mobileError",
            "Enter a valid 10-digit Indian mobile number."
        );
        return false;
    }

    showValid(mobileInput, "mobileError");
    return true;
}


// Validate Password
function validatePassword() {

    const password = passwordInput.value;

    if (password === "") {
        showError(
            passwordInput,
            "passwordError",
            "Password is required."
        );
        return false;
    }

    if (!passwordRegex.test(password)) {
        showError(
            passwordInput,
            "passwordError",
            "Password must contain 8+ characters, uppercase, lowercase, number and special character."
        );
        return false;
    }

    showValid(passwordInput, "passwordError");
    return true;
}


// Validate Confirm Password
function validateConfirmPassword() {

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword === "") {
        showError(
            confirmPasswordInput,
            "confirmPasswordError",
            "Please confirm your password."
        );
        return false;
    }

    if (password !== confirmPassword) {
        showError(
            confirmPasswordInput,
            "confirmPasswordError",
            "Passwords do not match."
        );
        return false;
    }

    showValid(confirmPasswordInput, "confirmPasswordError");
    return true;
}


// Validate Course
function validateCourse() {

    const course = document.getElementById("course");
    const error = document.getElementById("courseError");

    if (course.value === "") {
        course.classList.add("invalid");
        error.textContent = "Please select a course.";
        return false;
    }

    course.classList.remove("invalid");
    course.classList.add("valid");
    error.textContent = "";

    return true;
}


// Validate Year
function validateYear() {

    const year = document.getElementById("year");
    const error = document.getElementById("yearError");

    if (year.value === "") {
        year.classList.add("invalid");
        error.textContent = "Please select your year.";
        return false;
    }

    year.classList.remove("invalid");
    year.classList.add("valid");
    error.textContent = "";

    return true;
}


// Validate Gender
function validateGender() {

    const genders = document.querySelectorAll(
        'input[name="gender"]'
    );

    const error = document.getElementById("genderError");

    let selected = false;

    genders.forEach(function(gender) {
        if (gender.checked) {
            selected = true;
        }
    });

    if (!selected) {
        error.textContent = "Please select your gender.";
        return false;
    }

    error.textContent = "";
    return true;
}


// Validate Terms
function validateTerms() {

    const terms = document.getElementById("terms");
    const error = document.getElementById("termsError");

    if (!terms.checked) {
        error.textContent =
            "You must accept the Terms and Conditions.";
        return false;
    }

    error.textContent = "";
    return true;
}


// Password strength meter
function checkPasswordStrength() {

    const password = passwordInput.value;

    let strength = 0;

    if (password.length >= 8) {
        strength++;
    }

    if (/[a-z]/.test(password)) {
        strength++;
    }

    if (/[A-Z]/.test(password)) {
        strength++;
    }

    if (/[0-9]/.test(password)) {
        strength++;
    }

    if (/[@$!%*?&]/.test(password)) {
        strength++;
    }

    if (strength <= 2) {
        strengthBar.style.width = "30%";
    }
    else if (strength <= 4) {
        strengthBar.style.width = "65%";
    }
    else {
        strengthBar.style.width = "100%";
    }
}


// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const validName = validateName();
    const validEmail = validateEmail();
    const validMobile = validateMobile();
    const validPassword = validatePassword();
    const validConfirmPassword = validateConfirmPassword();
    const validCourse = validateCourse();
    const validYear = validateYear();
    const validGender = validateGender();
    const validTerms = validateTerms();

    const successMessage =
        document.getElementById("successMessage");

    if (
        validName &&
        validEmail &&
        validMobile &&
        validPassword &&
        validConfirmPassword &&
        validCourse &&
        validYear &&
        validGender &&
        validTerms
    ) {

        successMessage.textContent =
            "Registration successful!";

        form.reset();

        nameInput.classList.remove("valid");
        emailInput.classList.remove("valid");
        mobileInput.classList.remove("valid");
        passwordInput.classList.remove("valid");
        confirmPasswordInput.classList.remove("valid");

        strengthBar.style.width = "0%";

    } else {

        successMessage.textContent =
            "Please correct the errors before submitting.";

    }
});


// Real-time validation

nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

mobileInput.addEventListener("input", validateMobile);

passwordInput.addEventListener("input", function() {
    checkPasswordStrength();
    validatePassword();

    if (confirmPasswordInput.value !== "") {
        validateConfirmPassword();
    }
});

confirmPasswordInput.addEventListener(
    "input",
    validateConfirmPassword
);

document.getElementById("course").addEventListener(
    "change",
    validateCourse
);

document.getElementById("year").addEventListener(
    "change",
    validateYear
);

document.querySelectorAll(
    'input[name="gender"]'
).forEach(function(gender) {

    gender.addEventListener("change", validateGender);

});

document.getElementById("terms").addEventListener(
    "change",
    validateTerms
);
```
