window.addEventListener("scroll", function () {
  var button = document.querySelector(".back-to-top");
  if (window.pageYOffset > 200) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});

document.querySelector(".back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
