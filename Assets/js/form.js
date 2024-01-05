const formFieldset = document.querySelector(".form-fieldset");

const fName = document.getElementById("fName");

const lName = document.getElementById("lName");

const email = document.getElementById("email");

const password = document.getElementById("password");

const repeatPassword = document.getElementById("passwordRepeat");

const submitBtn = document.getElementById("submit-btn");

const validateFormInput = (input, regEx, errorMessage) => {
  const trimmedValue = input.value.trim();
  const isValid = regEx.test(trimmedValue);

  if (isValid) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    displayErrorMessage(errorMessage);
  }

  return isValid;
};

const displayErrorMessage = (message) => {
  errorTextContainer.textContent = message;
};

const validateForm = (e) => {
  const nameRegEx = /^[a-zA-Z]{2,17}$/;
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const passwordRegEx = /^[a-zA-Z]{6,17}$/;

  const isFNameValid = validateFormInput(
    fName,
    nameRegEx,
    "First Name must be at least 2 characters"
  );
  const isLNameValid = validateFormInput(
    lName,
    nameRegEx,
    "Last Name must be at least 2 characters"
  );
  const isEmailValid = validateFormInput(
    email,
    emailRegEx,
    "Email must be a valid email"
  );
  const isPasswordValid = validateFormInput(
    password,
    passwordRegEx,
    "Password must be at least 6 characters"
  );
  const isPasswordRepeatValid = repeatPassword.value === password.value;

  if (
    isFNameValid &&
    isLNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isPasswordRepeatValid
  ) {
    formFieldset.innerHTML = "";
    const recivedMessage = document.createElement("h2");
    recivedMessage.textContent = "Form filled correctly!";

    formFieldset.appendChild(recivedMessage);
  } else {
    e.preventDefault();
  }

  if (!isPasswordRepeatValid) {
    displayErrorMessage("Passwords do not match");
  }
};

submitBtn.addEventListener("click", validateForm);

const errorTextContainer = document.createElement("div");
errorTextContainer.classList.add("errorContainer");

formFieldset.appendChild(errorTextContainer);
