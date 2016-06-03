$(document).ready(function () {

  var bodyResize = function() {
    var b = $('body');
    if ($(this).width() <= 768) b.addClass('page-small');
    else {
      b.removeClass('page-small');
      b.removeClass('show-left-menu');
    }
  };

  var adjustContentHeight = function () {
    // Get and set current height
    var headerH = $('body>nav.navbar').height();
    var leftMenu = $("#left-menu").height();
    var mContent = $('#main-content');
    var content = mContent.height();

    var h = Math.max($("#left-menu").height(), mContent.height());
    console.log(h);
    mContent.css("min-height", h  + 'px');
  };

  bodyResize();
  adjustContentHeight();

  $('.hide-left-menu').click(function (event) {
    event.preventDefault();
    if ($(window).width() <= 768) $('body').toggleClass('show-left-menu');
    else $('body').toggleClass('hide-left-menu');
  });

  $(window).bind("resize", function () {
    bodyResize();
    setTimeout(function () {
      adjustContentHeight();
    }, 300);
  });

  // initialize menu


});
