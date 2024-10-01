// $(document).ready(function () {
//   function applyHoverEff() {
//     $(".mainnav-lg #mainnav-menu > li").off("mouseenter mouseleave");

//     $(".mainnav-sm #mainnav-menu > li").hover(
//       function () {
//         // On mouse enter, add the hover effect class
//         $(this).find("ul.collapse").removeClass("collapse");
//         menuText = $(this).find("a.sidebar-link").attr("title");
//         $(this).find(".sidebar-item").addClass("hover");
//         $(this)
//           .find(".sidebar-item")
//           .prepend('<h3 class="menu-title-bg">' + menuText + "</h3>");
//       },
//       function () {
//         // On mouse leave, remove the hover effect class

//         $(this).find("div").addClass("collapse");
//         $(this).find(".sidebar-item .menu-title-bg").remove();
//         $(this).find(".sidebar-item").removeClass("hover");
//       }
//     );
//   }

//   applyHoverEff();
//   $(".sidemenu-toggle").click(
//     (expanMenu = () => {
//       applyHoverEff();
//       if ($(".mainnav-sm").length == 1) {
//         $(".sidebar-link").removeClass("collapsed");
//         $(".sidebar-item").removeClass("show");
//       }
//     })
//   );
// });

document.addEventListener("DOMContentLoaded", function () {
  function handleMouseEnter(item) {
    const submenu = item.querySelector("ul.sidebar-dropdown");
    const menuText = item.querySelector("a.sidebar-link").getAttribute("nav-title");

    // Show the submenu and add hover effects
    if (submenu) {
      submenu.classList.remove("collapse");
    }
    const sidebarItem = item.querySelector(".sidebar-item");
    if (sidebarItem) {
      sidebarItem.classList.add("hover");
      const titleElement = document.createElement("h3");
      titleElement.className = "menu-title-bg";
      titleElement.textContent = menuText;
      sidebarItem.prepend(titleElement);
    }
  }

  function handleMouseLeave(item) {
    const submenu = item.querySelector("ul.sidebar-dropdown");
    const sidebarItem = item.querySelector(".sidebar-item");

    // Hide the submenu and remove hover effects
    if (submenu) {
      submenu.classList.add("collapse");
    }
    if (sidebarItem) {
      const titleElement = sidebarItem.querySelector(".menu-title-bg");
      if (titleElement) {
        titleElement.remove();
      }
      sidebarItem.classList.remove("hover");
    }
  }

  function applyHoverEff() {
    const menuItems = document.querySelectorAll(".sidebar-nav .sidebar-item");

    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        handleMouseEnter(item);
      });

      item.addEventListener("mouseleave", function () {
        handleMouseLeave(item);
      });
    });
  }

  applyHoverEff();

  const sidemenuToggle = document.querySelector(".sidemenu-toggle");
  if (sidemenuToggle) {
    sidemenuToggle.addEventListener("click", function () {
      applyHoverEff();
      const mainnavSm = document.querySelector("#sidebar");
      if (mainnavSm) {
        const sidebarLinks = document.querySelectorAll(".sidebar-link");
        sidebarLinks.forEach((link) => link.classList.remove("collapsed"));
        const sidebarItems = document.querySelectorAll(".sidebar-item");
        sidebarItems.forEach((item) => item.classList.remove("show"));
      }
    });
  }
});
