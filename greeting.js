const form = document.querySelector(`.js-form`),
  greeting = document.querySelector(`.js-greeting`),
  input = form.querySelector(`input`),
  toDoForm = document.querySelector(`.js-toDoForm`);

function submitName(event) {
  event.preventDefault();
  const nameValue = input.value;
  localStorage.setItem(`userName`, nameValue);
  form.classList.remove(`showing`);
  showGreeting(nameValue);
}

function askForName() {
  form.classList.add(`showing`);
  toDoForm.classList.add(`form`);
  form.addEventListener(`submit`, submitName);
}

function showGreeting(name) {
  greeting.classList.add(`showing`);
  toDoForm.classList.remove(`form`);
  greeting.innerText = `Hello ${name}`;
}

function loadGreeting() {
  const nowUser = localStorage.getItem(`userName`);
  if (nowUser === null) {
    askForName();
    console.log(toDoForm);
  } else {
    showGreeting(nowUser);
  }
}

function init() {
  loadGreeting();
}
init();
