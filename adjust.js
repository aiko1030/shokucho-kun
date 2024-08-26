// @ts-nocheck
const paragraphsSizeAjust = (size) => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = size.toString() + "rem";
    paragraphs[i].style.backgroundSize = size.toString() + "px";
  }
};
function adjustArrow() {
  const th = document.querySelector(".concern table th");
  const arrow = document.querySelector(".arrow");

  const thHeight = th.offsetHeight;
  const arrowSize = thHeight; // Ajuster la taille de la flèche en fonction du parent

  // Modifier les dimensions de la flèche
  arrow.style.borderLeftWidth = `${arrowSize / 2}px`;
  arrow.style.borderRightWidth = `${arrowSize / 2}px`;
  arrow.style.borderTopWidth = `${arrowSize}px`;

  // Positionner la flèche
  arrow.style.right = `-${arrowSize * 3}px`;
}
const imageSizesAjust = (width) => {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.width = width.toString() + "%";
  }
};
let windowWidth = window.innerWidth;
if (windowWidth <= 768) {
  paragraphsSizeAjust(1); // here is for the size of the paragraphs in rem
  imageSizesAjust(50); //here is for the width of every image in %
  if (windowWidth <= 360) {
    paragraphsSizeAjust(0.5);
    imageSizesAjust(30);
  }
}
