$(document).ready(function () {
  function applyHoverEff() {
    $(".mainnav-lg #mainnav-menu > li").off("mouseenter mouseleave");

    $(".mainnav-sm #mainnav-menu > li").hover(
      function () {
        // On mouse enter, add the hover effect class
        $(this).find("ul.collapse").removeClass("collapse");
        menuText = $(this).find("a.sidebar-link").attr("title");
        $(this).find(".sidebar-item").addClass("hover");
        $(this)
          .find(".sidebar-item")
          .prepend('<h3 class="menu-title-bg">' + menuText + "</h3>");
      },
      function () {
        // On mouse leave, remove the hover effect class

        $(this).find("div").addClass("collapse");
        $(this).find(".sidebar-item .menu-title-bg").remove();
        $(this).find(".sidebar-item").removeClass("hover");
      }
    );
  }

  applyHoverEff();
  $(".sidemenu-toggle").click(
    (expanMenu = () => {
      applyHoverEff();
      if ($(".mainnav-sm").length == 1) {
        $(".sidebar-link").removeClass("collapsed");
        $(".sidebar-item").removeClass("show");
      }
    })
  );
});

// ==============================================
// ==============================================
// ==============================================

// $(document).ready(function () {
//   function handleMouseEnter(item) {
//     const submenu = item.find("ul.sidebar-dropdown");
//     const menuText = item.find("a.sidebar-link").attr("nav-title");

//     // Show the submenu
//     if (submenu.length) {
//       submenu.removeClass("collapse");

//       // Check if the title element already exists in the submenu
//       if (submenu.find(".menu-title-bg").length === 0) {
//         const titleElement = $('<h3 class="menu-title-bg"></h3>').text(menuText);
//         submenu.prepend(titleElement); // Add the title above the submenu
//       }
//     }
//     const sidebarItem = item.find(".sidebar-item");
//     if (sidebarItem.length) {
//       sidebarItem.addClass("hover");
//     }
//   }

//   function handleMouseLeave(item) {
//     const submenu = item.find("ul.sidebar-dropdown");
//     const sidebarItem = item.find(".sidebar-item");

//     // Hide the submenu
//     if (submenu.length) {
//       submenu.addClass("collapse");
//       submenu.find(".menu-title-bg").remove(); // Remove the title element on mouse leave
//     }
//     if (sidebarItem.length) {
//       sidebarItem.removeClass("hover");
//     }
//   }

//   function applyHoverEff() {
//     const menuItems = $(".sidebar-nav .sidebar-item");
//     const isSmallScreen = $(window).width() < 992;

//     menuItems.each(function () {
//       const item = $(this);
//       if (isSmallScreen) {
//         // On small screens, remove hover effects
//         item.off("mouseenter mouseleave");
//       } else {
//         // On larger screens, add hover effects
//         item.on("mouseenter", function () {
//           handleMouseEnter(item);
//         });
//         item.on("mouseleave", function () {
//           handleMouseLeave(item);
//         });
//       }
//     });
//   }

//   // Initial application of hover effects
//   applyHoverEff();

//   const sidemenuToggle = $(".sidemenu-toggle");
//   if (sidemenuToggle.length) {
//     sidemenuToggle.on("click", function () {
//       applyHoverEff();
//       const mainnavSm = $("#sidebar");
//       if (mainnavSm.length) {
//         $(".sidebar-link").removeClass("collapsed");
//         $(".sidebar-item").removeClass("show");
//       }
//     });
//   }

//   // Reapply hover effects on window resize
//   $(window).on("resize", applyHoverEff);
// });
