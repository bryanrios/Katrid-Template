$(document).ready(function () {
  $('#demo-settings>span.demo').click(function () {
    console.log('test');
    $('#demo-settings').toggleClass('active');
  });

  $('#demo-settings').append('<div id="demo-choices" class="animated fadeIn">' +
    '<div class="checkbox"><label><input id="demo-show-logo" type="checkbox"> Display logo area</label></div>' +
    '<div class="checkbox"><label><input id="demo-left-navbar-skin" type="checkbox" checked> Apply to navbar menu</label></div>' +
    '<div class="checkbox"><label><input id="demo-left-menu-skin" type="checkbox" checked> Apply to left side menu</label></div>' +
    '<h4>Available Skins</h4>' +
    '<button class="btn btn-default btn-block btn-demo-skin" data-value="classic">Classic</button>' +
    '<button class="btn btn-primary btn-block btn-demo-skin" data-value="navy">Navy</button>' +
    '<button class="btn btn-info btn-block btn-demo-skin" data-value="blue">Blue</button>' +
    '<button class="btn btn-dark btn-block btn-demo-skin" data-value="gray">Gray</button>' +
    '<button class="btn btn-danger btn-block btn-demo-skin" data-value="red">Red</button>' +
    '</div>');
  $('.btn-demo-skin').click(function () {
    var body = $('body');
    body.removeClass('navy-skin');
    body.removeClass('blue-skin');
    body.removeClass('gray-skin');
    body.removeClass('red-skin');
    var v = $(this).data('value');
    if (v !== 'classic') {
      body.addClass(v + '-skin');
      body.addClass('skin');
    }
  });

  $('#demo-left-navbar-skin').change(function () {
    if (this.checked) $('#navbar-nav').addClass('navbar-skin');
    else $('#navbar-nav').removeClass('navbar-skin');
  });

  $('#demo-left-menu-skin').change(function () {
    if (this.checked) {
      $('#left-menu').addClass('skin');
      $('body').addClass('bg-skin');
    }
    else {
      $('#left-menu').removeClass('skin');
      $('body').removeClass('bg-skin');
    }
  });

  $('#demo-show-logo').change(function () {
    if (this.checked) $('.logo-area').show();
    else $('.logo-area').hide();
  });
});
