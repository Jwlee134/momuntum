export const bg = () => {
  function showImg() {
    const img = new Image();
    img.src = `https://source.unsplash.com/1600x900/?nature,landscape`;
    document.body.appendChild(img);
  }

  function init() {
    showImg();
  }
  init();
};
