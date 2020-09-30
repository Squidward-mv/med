$(".js-button-compaign").click(function () {
  $("med").css("filter", "blur(5px)");
  $(".js-overlay-compaign").fadeIn();
  $(".js-overlay-compaign").addClass("disabled");
});

$(".js-close-compaign").click(function () {
  $(".js-overlay-compaign").fadeOut();
  $("med").css("filter", "none");
});

$(document).mouseup("load", function (e) {
  var popup = $(".js-popup-compaign");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".js-overlay-compaign").fadeOut();
    $("med").css("filter", "none");
  }
});
