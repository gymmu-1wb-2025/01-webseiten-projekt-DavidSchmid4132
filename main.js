let showNumer = false;
function increaseCount() {
  let titleElement = document.querySelector("h1");

  //
  showNumer = !showNumer;

  //
  if (showNumer) {
    let count = 17;
    titleElement.textContent = count;
  } else {
    titleElement.textContent = "Die Karriere von Josh Allen";
  }
}
