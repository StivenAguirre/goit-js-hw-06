const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItem = [];

for (let index = 0; index < ingredients.length; index++) {
  const createList = document.createElement("li");
  createList.classList.add("item");
  createList.innerHTML = ingredients[index];
  listItem.push(createList);
}

listItem.forEach((li) => {
  document.querySelector("#ingredients").append(li);
});
