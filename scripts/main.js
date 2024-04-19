var element = document.getElementById("navbarTogglerDemo01");

const burger = document.querySelector(".navbar-toggler");
const burger_close = document.querySelector(".burger_close");
const burger_open = document.querySelector(".navbar-collapse");

// function del() {
//   element.style.display = "none";
// }

burger.addEventListener("click", (e) => {
  e.preventDefault();
  burger.style.display = "none";
  burger_close.style.display = "block";
  burger_open.style.display = "block";
});

burger_close.addEventListener("click", (e) => {
  e.preventDefault();
  burger.style.display = "block";
  burger_close.style.display = "none";
  burger_open.style.display = "none";
});
