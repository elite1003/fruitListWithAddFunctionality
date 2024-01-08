// Add the Edit Button:
const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fruitToAdd = document.querySelector("#fruit-to-add");

  const newLi = document.createElement("li");
  newLi.className = "fruit";
  newLi.innerHTML =
    fruitToAdd.value +
    '<button class="delete-btn">x</button>' +
    '<button class="edit-btn">edit</button>';

  fruits.appendChild(newLi);
});

const fruitList = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitList.length; i++) {
  const editButton = document.createElement("button");
  const textEditButton = document.createTextNode("edit");
  editButton.appendChild(textEditButton);
  editButton.className = "edit-btn";
  fruitList[i].appendChild(editButton);
}

fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});

// Implement the code as in video but with one extra 'Edit' button in 'li'
