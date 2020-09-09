const form = document.querySelector(`.js-form`),
  greeting = document.querySelector(`.js-greeting`),
  input = form.querySelector(`input`);

function submitName() {
  event.preventDefault();
  const nameValue = input.value;
  localStorage.setItem(`userName`, nameValue);
  form.classList.remove(`showing`);
  showGreeting(nameValue);
}

function askForName() {
  form.classList.add(`showing`);
  form.addEventListener(`submit`, submitName);
}

function showGreeting(name) {
  greeting.classList.add(`showing`);
  greeting.innerText = `Hello ${name}`;
}

function loadGreeting() {
  const nowUser = localStorage.getItem(`userName`);
  if (nowUser === null) {
    askForName();
  } else {
    showGreeting(nowUser);
  }
}

function init() {
  loadGreeting();
}
init();
