$(document).ready(function () {
  $(".item__button .btn").on("click", function () {
    $(".overlay").addClass("is-open");
  });
  $(".popup__close").on("click", function () {
    $(".overlay").removeClass("is-open");
  });
  $(document).mouseup(function (e) {
    var o = $(".popup");
    e.target != o[0] &&
      0 === o.has(e.target).length &&
      $(".overlay").removeClass("is-open");
  });
  $('a[href^="#"]').click(function () {
    var e = $(this).attr("href"),
      o = $(e).offset().top - 60;
    return (
      jQuery("html:not(:animated), body:not(:animated)").animate(
        { scrollTop: o },
        800
      ),
      !1
    );
  });
  $(".catalog__button .btn").on("click", function () {
    $(".catalog__button .btn").removeClass("active");
    $(this).addClass("active");
  });
  $(".item__sizes li").on("click", function () {
    $(".item__sizes li").removeClass("target");
    $(this).addClass("target");
  });
});
