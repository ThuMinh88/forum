$(document).ready(function (e) {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (e) {
      var data_id = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(data_id).offset().top
      }, '500');
    });
    $(".b-container > img:not(:first-child)").hide();
    setInterval(function() {
      $("d.b-container > img:first-child").hide("slow").next().show("slow").end().appendTo(".b-container");
    }, 1000);
});
/* if ($(this).width() > $(this).height()) {
    $(this).css('width', MaxPreviewDimension + 'px');
    $(this).css('height', 'auto');
  } else {
    $(this).css('height', MaxPreviewDimension + 'px');
    $(this).css('width', 'auto');
  } */