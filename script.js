// Get form elements
const form = document.getElementById("signupForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submitBtn");

// Get error messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Check if all fields are valid
function validateForm() {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const confirmPasswordValid = validateConfirmPassword();

    // Enable submit button if all fields are valid
    submitButton.disabled = !(nameValid && emailValid && passwordValid && confirmPasswordValid);
}

// Validate Name Field
function validateName() {
    if (nameField.value.trim() === "") {
        nameError.style.display = "block";
        return false;
    } else {
        nameError.style.display = "none";
        return true;
    }
}

// Validate Email Field
function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailField.value.trim())) {
        emailError.style.display = "block";
        return false;
    } else {
        emailError.style.display = "none";
        return true;
    }
}

// Validate Password Field
function validatePassword() {
    if (passwordField.value.length < 8) {
        passwordError.style.display = "block";
        return false;
    } else {
        passwordError.style.display = "none";
        return true;
    }
}

// Validate Confirm Password Field
function validateConfirmPassword() {
    if (confirmPasswordField.value !== passwordField.value) {
        confirmPasswordError.style.display = "block";
        return false;
    } else {
        confirmPasswordError.style.display = "none";
        return true;
    }
}

// Event Listeners for real-time validation
nameField.addEventListener("input", validateForm);
emailField.addEventListener("input", validateForm);
passwordField.addEventListener("input", validateForm);
confirmPasswordField.addEventListener("input", validateForm);

// Form submission handler
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (submitButton.disabled) {
        alert("Please fix the errors before submitting.");
    } else {
        alert("Form submitted successfully!");
        // You can send the form data here (AJAX, etc.)
    }
});
