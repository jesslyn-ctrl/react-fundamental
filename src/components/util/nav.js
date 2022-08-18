$(document).ready(function () {
  $(".nav-link.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("a")
    .addClass("active");
});
