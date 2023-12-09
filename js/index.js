function toggleNav() {
  const nav = document.querySelector(".nav");
  nav.style.display =
    nav.style.display === "none" || nav.style.display === "" ? "block" : "none";
}

function zoomIn(element) {
  element.classList.add("zoomed-in");
}

function zoomOut(element) {
  element.classList.remove("zoomed-in");
}

function toggleTextVisibility(element, showText) {
  const testName = element.querySelector(".test-name");
  const testText = element.querySelector(".test-text");

  testName.style.display = showText ? "none" : "block";
  testText.style.display = showText ? "block" : "none";
}
