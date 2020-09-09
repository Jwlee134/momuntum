function genNum() {
  const randomNum = Math.floor(Math.random() * 15 + 1);
  const img = new Image();
  img.src = `img/${randomNum}.jpg`;
  document.body.appendChild(img);
}

function init() {
  genNum();
}
init();
