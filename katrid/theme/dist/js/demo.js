$(document).ready(function () {
  $('#demo-settings>span.demo').click(function () {
    console.log('test');
    $('#demo-settings').toggleClass('active');
  });

  $('#demo-settings').append('<div id="demo-choices" class="animated fadeIn">' +
    '<div class="checkbox"><label><input id="demo-highlight-selection" type="checkbox"> Highlight dropdown menu selection</label></div>' +
    '<div class="checkbox"><label><input id="demo-show-logo" type="checkbox" checked> Display logo area</label></div>' +
    '<div class="checkbox"><label><input id="demo-left-menu-skin" type="checkbox" checked> Apply to left side menu</label></div>' +
    '<h4>Available Skins</h4>' +
    '<button class="btn btn-default btn-block btn-demo-skin" data-value="classic">Classic</button>' +
    '<button class="btn btn-primary btn-block btn-demo-skin" data-value="navy">Navy</button>' +
    '<button class="btn btn-info btn-block btn-demo-skin" data-value="blue">Blue</button>' +
    '<button class="btn btn-default btn-block btn-demo-skin" data-value="gray">Gray</button>' +
    '<button class="btn btn-danger btn-block btn-demo-skin" data-value="red">Red</button>' +
    '</div>');
  $('.btn-demo-skin').click(function () {
    var body = $('body');
    body.removeClass('navy-skin');
    body.removeClass('blue-skin');
    body.removeClass('gray-skin');
    body.removeClass('red-skin');
    var v = $(this).data('value');
    if (v === 'classic') {
      $('nav.navbar-inverse').removeClass('navbar-inverse').addClass('navbar-default');
    }
    else {
      $('nav.navbar').addClass('navbar-inverse');
      body.addClass(v + '-skin');
      body.addClass('skin');
    }
  });

  $('#demo-highlight-selection').change(function () {
    if (this.checked) $('body').addClass('highlight-selection');
    else $('body').removeClass('highlight-selection');
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
