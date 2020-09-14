const toDoForm = document.querySelector(`.js-toDoForm`),
  toDoInput = toDoForm.querySelector(`input`),
  toDoList = document.querySelector(`.js-toDoList`);

let toDos = [];

function removeToDo() {
  const btn = event.target,
    li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDo;
  saveToDo();
}

function makeList(text) {
  const li = document.createElement(`li`),
    span = document.createElement(`span`),
    delbtn = document.createElement(`button`),
    newId = toDos.length + 1;
  li.appendChild(span);
  li.appendChild(delbtn);
  li.id = newId;
  toDoList.appendChild(li);
  span.innerText = text;
  delbtn.innerText = `❌`;
  delbtn.addEventListener(`click`, removeToDo);
  toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  li.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(`toDo`, JSON.stringify(toDos));
}

function submitToDo() {
  event.preventDefault();
  const toDoValue = toDoInput.value;
  toDoInput.value = "";
  if (toDoValue) {
    makeList(toDoValue);
  }
}

function init() {
  toDoForm.addEventListener(`submit`, submitToDo);
  const localStorageValue = localStorage.getItem(`toDo`);
  if (localStorageValue !== null) {
    const parsedToDos = JSON.parse(localStorageValue);
    parsedToDos.forEach(function (toDo) {
      makeList(toDo.text);
    });
  }
}
init();
