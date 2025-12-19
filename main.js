let showNumer = false;
function increaseCount() {
  let titleElement = document.querySelector("h1");

  // Kehrt den aktuellen Wert von showNumer um: ist es true, wird es false, und umgekehrt
  showNumer = !showNumer;

  // Wenn showNumer true ist, wird die Zahl 17 angezeigt, sonst der Text "Die Karriere von Josh Allen"
  if (showNumer) {
    let count = 17;
    titleElement.textContent = count;
  } else {
    titleElement.textContent = "Die Karriere von Josh Allen";
  }
}
