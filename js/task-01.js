const ulCategories = document.querySelector("#categories");

const categoriesItems = document.querySelectorAll(".item");

const itemLength = categoriesItems.length;

console.log(`Number of categories : ${itemLength}`);

categoriesItems.forEach((categoriesItem) => {
  const titleItem = categoriesItem.querySelector("h2");

  const elementItem = categoriesItem.querySelectorAll("li");

  const titleName = titleItem.textContent;

  const elementItemLength = elementItem.length;

  console.log(`Category : ${titleName}`);

  console.log(`Elements : ${elementItemLength}`);
});
