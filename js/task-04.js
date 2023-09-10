const container = document.querySelector("#counter");
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const valueCounter = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  newValue();
};

const increment = () => {
  counterValue += 1;
  newValue();
};

const newValue = () => {
  valueCounter.textContent = counterValue;
};

buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);

newValue();

console.log(counterValue);
