"use strict";

// -- HEADER FIXED -- //
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 80) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
