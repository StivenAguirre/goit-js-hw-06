const container = document.querySelector("#controls");
const input = document.querySelector("input");
const buttonCreate = document.querySelector('button[data-action="create"]');
const buttonDestroy = document.querySelector('button[data-action="destroy"]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  const randomColor = getRandomHexColor();
  const newElementBoxes = document.createElement("div");
  newElementBoxes.styles.width = 30px;
  
}
