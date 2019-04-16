var $subnav = $('.sub-nav');
var $sidebar = $('.side-bar')
var $btn = $('.jump-nav');

$subnav.on('change', function(){
  var isOpen = $(this).prop('checked')
  $subnav.prop('checked', false)
  if (isOpen) {
    $(this).prop('checked', true)
  }
});

$subnav.on('keydown', function(e){
  if(e.key=='Enter'){
    $(this).click()
  }
});

$sidebar.on('change', function(){
  var isOpen = $(this).prop('checked')
  $sidebar.prop('checked', false)
  if (isOpen) {
    $(this).prop('checked', true)
  }

});

$sidebar.on('keydown', function(e){
  if(e.key=='Enter'){
    $(this).click()
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    $btn.addClass('show');
  } else {
    $btn.removeClass('show');
  }
});

$btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
