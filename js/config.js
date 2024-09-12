const toggler = document.querySelector(".sidemenu-toggle");
toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
  $("#sidemenuDemo").toggleClass("collapsed");
});
