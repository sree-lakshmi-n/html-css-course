`use strict`;
const item = document.getElementsByClassName("item");
Array.from(item).forEach((e) =>
  e.addEventListener("click", () => {
    e.classList.toggle("open");
  })
);
