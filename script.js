const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["first-name"];
  const lastName = form["last-name"];
  const email = form["email"];
  const password = form["password"];

  const errorFname = document.querySelector(".error-fname");
  const errorLname = document.querySelector(".error-lname");
  const errorEmail = document.querySelector(".error-email");
  const errorPass = document.querySelector(".error-pass");

  if (firstName.value === "") {
    addErrorTo(firstName, errorFname, "First Name cannot be empty");
  } else if (!isValidFirst(firstName.value)) {
    addErrorTo(
      firstName,
      errorFname,
      "The First Name must be at least 2 to 15 characters"
    );
  } else {
    removeErrorFrom(firstName, errorFname);
  }

  if (lastName.value === "") {
    addErrorTo(lastName, errorLname, "Last Name cannot be empty");
  } else if (!isValidLast(lastName.value)) {
    addErrorTo(
      lastName,
      errorLname,
      "The Last Name must be at least 2 to 20 characters"
    );
  } else {
    removeErrorFrom(lastName, errorLname);
  }

  if (password.value === "") {
    addErrorTo(password, errorPass, "Password cannot be empty");
  } else if (!isValidPass(password.value)) {
    addErrorTo(
      password,
      errorPass,
      "The password must be of 3 to 10 characters and at least one number"
    );
  } else {
    removeErrorFrom(password, errorPass);
  }

  if (email.value === "") {
    addErrorTo(email, errorEmail, "Email cannot be empty");
  } else if (!isValidEmail(email.value)) {
    addErrorTo(email, errorEmail, "Please provide a valid email");
  } else {
    removeErrorFrom(email, errorEmail);
  }

  if (
    errorFname.style.display === "none" &&
    errorLname.style.display === "none" &&
    errorEmail.style.display === "none" &&
    errorPass.style.display === "none"
  ) {
    console.log("Form submitted successfully!");
    alert("Form submitted successfully!");
    form.reset();
  }
});

function addErrorTo(field, error, message) {
  field.classList.add("error");
  error.style.display = "block";
  error.innerText = message;
}

function removeErrorFrom(field, error) {
  field.classList.remove("error");
  error.style.display = "none";
}

//regular expressions

function isValidFirst(firstName) {
  var re = /^([a-zA-Z]){2,15}$/;
  return re.test(String(firstName).toLowerCase());
}

function isValidLast(lastName) {
  var re = /^([a-zA-Z]){2,20}$/;
  return re.test(String(lastName).toLowerCase());
}

function isValidPass(password) {
  var re = /^(?=.*\d).{3,10}$/;
  return re.test(String(password).toLowerCase());
}

function isValidEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
