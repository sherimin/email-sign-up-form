document.getElementById("submit-button").addEventListener("click", function () {
  const submittedEmail = document.getElementById("submitted-email-span");

  const emailInput = document.getElementById("email-input").value;

  const emailIsValid = (emailInput) => {
    if (!emailInput.length) return false;

    return emailInput
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  if (!emailIsValid(emailInput)) {
    document
      .getElementsByClassName("email-input-container")[0]
      .classList.add("error");
    document.getElementsByClassName("error-msg")[0].style.display = "flex";
  } else {
    document.getElementsByClassName("sign-up-form-container")[0].style.display =
      "none";
    document.getElementById("success-msg").style.display = "flex";
    document.getElementById("success-msg").style.animation =
      "bounce 1s ease forwards";
    submittedEmail.textContent = emailInput;
  }
});

document
  .getElementById("dismiss-button")
  .addEventListener("click", function () {
    document.getElementsByClassName("sign-up-form-container")[0].style.display =
      "flex";
    document.getElementById("success-msg").style.display = "none";
  });
