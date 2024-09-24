$(document).ready(function () {
  console.log("sidenav js included");
  function handleMenuHover() {
    if (!$("#sidebar").hasClass("collapsed")) {
      $(".sidebar-nav li a").hover(
        function () {
          console.log("hover");
          var titleText = $(this).attr("nav-title");
          if (titleText) {
            var tooltip = $('<div class="tooltip-menu"></div>').text(titleText).appendTo("body");

            // Position the tooltip near the mouse cursor
            $(this).mousemove(function (event) {
              tooltip.css({
                top: event.pageY + 10 + "px",
                position: "absolute",
                background: "#333", // Optional: style the tooltip
                color: "#fff",
                padding: "15px",
                zIndex: 99999,
              });
            });
          }
        },
        function () {
          // Remove the tooltip when the mouse leaves
          $(".tooltip-menu").remove();
        }
      );
    } else if (!$("#sidebar").hasClass("collapsed")) {
      // Unbind hover event if the "mainnav-lg" class exists
      $(".sidebar-nav li a").unbind("mouseenter mouseleave");
    }
  }

  handleMenuHover();
  $(window).resize(function () {
    handleMenuHover();
  });
});
