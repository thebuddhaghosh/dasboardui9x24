$(document).ready(function () {
  $(".sidemenu-toggle").click(function () {
    var crossIcon = $(this).find("i");
    if (crossIcon && crossIcon.hasClass("bx bx-menu")) {
      crossIcon.removeClass("bx bx-menu").addClass("bx bx-x");
    } else {
      crossIcon.removeClass("bx bx-x").addClass("bx bx-menu");
    }
    var mainnav = $("#sidebar");
    if (mainnav.hasClass("mainnav-lg")) {
      $("#sidemenuDemo").removeClass("mainnav-lg").addClass("mainnav-sm");
      mainnav.removeClass("mainnav-lg").addClass("mainnav-sm");
      const navItems = document.querySelectorAll(".mainnav-sm");

      navItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          this.classList.add("hover-effect");
        });

        item.addEventListener("mouseleave", function () {
          this.classList.remove("hover-effect");
        });
      });
    } else {
      $("#sidemenuDemo").removeClass("mainnav-sm").addClass("mainnav-lg");
      mainnav.removeClass("mainnav-sm").addClass("mainnav-lg");
    }
  });
});
