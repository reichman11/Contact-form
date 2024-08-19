const form = document.querySelector("form");
const dialog = document.querySelector(".form-dialog");
const closeBtn = document.querySelector(".close-btn");

// EVENT LISTENER FOR FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    dialog.showModal();
  }
});

// EVENT LISTENER FOR CLOSING DIALOG
closeBtn.addEventListener("click", () => {
  dialog.close();
  form.reset();
});

const firstNameInput = document.querySelector("#first-name");
const firstNameErrorIcon = document.querySelector(
  ".first-name-wrapper .error-icon"
);
const firstNameSuccessIcon = document.querySelector(
  ".first-name-wrapper .success-icon"
);

const lastNameInput = document.querySelector("#last-name");
const lastNameErrorIcon = document.querySelector(
  ".last-name-wrapper .error-icon"
);
const lastNameSuccessIcon = document.querySelector(
  ".last-name-wrapper .success-icon"
);

// FUNCTION FOR NAME VALIDATION
const validateName = (input, errorIcon, successIcon) => {
  const value = input.value.trim();

  if (value.length < 3 || value.length > 15) {
    errorIcon.classList.remove("hidden");
    successIcon.classList.add("hidden");
    return false;
  } else {
    errorIcon.classList.add("hidden");
    successIcon.classList.remove("hidden");
    return true;
  }
};

// EVENT LISTENER FOR FIRSTNAME
firstNameInput.addEventListener("input", () => {
  validateName(firstNameInput, firstNameErrorIcon, firstNameSuccessIcon);
});

// EVENT LISTENER FOR LASTNAME
lastNameInput.addEventListener("input", () => {
  validateName(lastNameInput, lastNameErrorIcon, lastNameSuccessIcon);
});

const emailInput = document.querySelector("#email-address");
const emailErrorIcon = document.querySelector(
  ".input-email-wrapper .error-icon"
);
const emailSuccessIcon = document.querySelector(
  ".input-email-wrapper .success-icon"
);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// FUNCTION FOR EMAIL VALIDATION
const validateEmail = () => {
  const value = emailInput.value;

  if (emailPattern.test(value)) {
    emailErrorIcon.classList.add("hidden");
    emailSuccessIcon.classList.remove("hidden");
    return true;
  } else {
    emailErrorIcon.classList.remove("hidden");
    emailSuccessIcon.classList.add("hidden");
    return false;
  }
};

// EVENT LISTENER FOR EMAIL
emailInput.addEventListener("input", validateEmail);

const genderTypeError = document.querySelector(".gender-type-error");

// FUNCTION FOR SEX TYPE VALIDATION
const validateSexType = () => {
  const selectedRadio = document.querySelector(
    'input[name="gender-type"]:checked'
  );

  if (!selectedRadio) {
    genderTypeError.textContent = "Vyberte pohlaví";
    genderTypeError.classList.remove("hidden");
    genderTypeError.classList.add("error");
    return false;
  } else {
    genderTypeError.textContent = "";
    return true;
  }
};

document.querySelectorAll('input[name="gender-type"]').forEach((radio) => {
  radio.addEventListener("change", validateSexType);
});

const messageInput = document.querySelector("#text-area");
const messageError = document.querySelector(".message-error");

// FUNCTION FOR MESSAGE VALIDATION

const validateMessage = () => {
  const value = messageInput.value;

  if (messageInput.value === "") {
    messageError.textContent = "Zadejte Vaši zprávu";
    messageError.classList.remove("hidden");
    messageError.classList.add("error");
    return false;
  } else if (value.length > 300) {
    messageError.textContent = "Překročil jste maximální povolený počet znaků!";
    messageError.classList.remove("hidden");
    messageError.classList.add("error");
    return false;
  } else {
    messageError.textContent = "";
    return true;
  }
};

// EVENT LISTENER FOR MESSAGE

messageInput.addEventListener("input", validateMessage);

const checkbox = document.querySelector("#checkbox");
const checkboxError = document.querySelector(".checkbox-error");

// FUNCTION FOR CHECK BOX VALIDATION

const validateCheckbox = () => {
  if (!checkbox.checked) {
    checkboxError.textContent = "Zaškrtněte políčko";
    checkboxError.classList.remove("hidden");
    checkboxError.classList.add("error");
    return false;
  } else {
    checkboxError.textContent = "";
    return true;
  }
};

// EVENT LISTENER FOR CHECKBOX

checkbox.addEventListener("change", validateCheckbox);

// FUNCTION FOR FORM VALIDATION

const validateForm = () => {
  const isFirstNameValid = validateName(
    firstNameInput,
    firstNameErrorIcon,
    firstNameSuccessIcon
  );
  const isLastNameValid = validateName(
    lastNameInput,
    lastNameErrorIcon,
    lastNameSuccessIcon
  );
  const isMessageValid = validateMessage();
  const isCheckboxValid = validateCheckbox();
  const isEmailValid = validateEmail();
  const isSexTypeValid = validateSexType();

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isMessageValid &&
    isCheckboxValid &&
    isEmailValid &&
    isSexTypeValid
  );
};
