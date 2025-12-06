const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value.toString();

  if (email && password) {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
    form.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
