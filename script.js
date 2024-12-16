window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutUsLink = document.querySelector('header ul a[href="#about-us"]');
  const aboutUsSection = document.getElementById("about-us");

  aboutUsLink.addEventListener("click", function (event) {
    event.preventDefault();
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
  });
});
