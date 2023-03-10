$(function () {
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  // a hover
  $('a').on('mouseover', function () {
    $(this).animate({
      opacity: 0.7,
    }, 100);
  });
  $('a').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });

  // topに戻るボタン
  $('#back-btn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });
    $(window).scroll(function() {
      if ($(window).scrollTop() > 200) {
        $('#back-btn').fadeIn(500).css('display', 'flex')
      } else {
        $('#back-btn').fadeOut(500);
      }
    });

  // なめらかスクロール
    $('a[href^="#"]').click(function(){
      var speed= 400;
      var href= $(this).attr("href");
      var target= $(href == "#" || href == "" ? 'html' : href);
      var position= target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });


  // モーダル
  $('.works img').click(function() {
    const imgSrc = $(this).attr('src');
    $('.bigimg').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  $('.close-btn').click(function() {
    $('.modal').fadeOut();
    return false
  });

  // セクションフェードイン
  $(window).scroll(function(){
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    
    $('section').each(function(){
      const position = $(this).offset().top;
      if (scroll > position - windowHeight + 100) {
        $(this).addClass("fadein");
      }
  });
});

  });