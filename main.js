let counter = 0;

function createNewElement() {
  let newElement = document.createElement("p");

  counter = counter + 1;

  newElement.textContent = "Element " + counter;

  let mainELement = document.querySelector("main");
  mainELement.appendChild(newElement);
}
