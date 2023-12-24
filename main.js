const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {
  const { username, password } = inputObj;

  const usernameWithoutSpaces = username.trim();
  const passwordWithoutSpaces = password.trim();

  let valid = true;

  // Validate condition 1: No empty or space-only inputs
  if (usernameWithoutSpaces === '' || passwordWithoutSpaces === '' ||
      username.includes(' ') || password.includes(' ')) {
    valid = false;
  }

  // Validate condition 2: Username length > 3, no leading numbers, no spaces
  if (usernameWithoutSpaces.length <= 3 || /^\d/.test(usernameWithoutSpaces)) {
    valid = false;
  }

  // Validate condition 3: Password length > 4
  if (passwordWithoutSpaces.length <= 4) {
    valid = false;
  }

  if (valid) {
    // Redirect to example.com if all conditions are met
    window.location.href = "https://www.example.com";

    // Optional: Check login against an array
    const users = [
      { username: "example", password: "password123" },
      { username: "user", password: "pass456" },
      // Add more user objects as needed
    ];

    const foundUser = users.find(
      (user) => user.username === usernameWithoutSpaces && user.password === passwordWithoutSpaces
    );

    if (foundUser) {
      console.log("Login successful!");
    }
  } else {
    // If validation fails, change input borders to red
    const inputs = document.querySelectorAll('.login-form input');
    inputs.forEach(input => {
      input.style.borderColor = 'red';
    });
  }
};

const hdlLogin = (e) => {
  e.preventDefault();
  let inputObj = {};

  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }

  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);