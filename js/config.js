// const toggler = document.querySelector(".sidemenu-toggle");
// toggler.addEventListener("click", function () {
//   document.querySelector("#sidebar").classList.toggle("collapsed");
//   $("#sidemenuDemo").toggleClass("collapsed");
// });

$(document).ready(function () {
  $(".sidemenu-toggle").click(function () {
    var mainnav = $("#sidebar");
    if (mainnav.hasClass("mainnav-lg")) {
      $("#sidemenuDemo").removeClass("mainnav-lg").addClass("mainnav-sm");
      mainnav.removeClass("mainnav-lg").addClass("mainnav-sm");
      // handleMenuHover();
    } else {
      $("#sidemenuDemo").removeClass("mainnav-sm").addClass("mainnav-lg");
      mainnav.removeClass("mainnav-sm").addClass("mainnav-lg");
      // handleMenuHover();
    }
  });
});
