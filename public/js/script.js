/*Cлайдер на внутренней странице новости*/

$(document).ready(function() {
  swiper = new Swiper('.article_slider .swiper-container', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoHeight: true,
    grabCursor: true,
    pagination: {
      el: ".article_slider .swiper-pagination",
      type: 'fraction'
    },
    navigation: {
      nextEl: '.article_slider .swiper-button-next',
      prevEl: '.article_slider .swiper-button-prev'
    }
  });
});

/*Выпадающее меню*/

$(document).ready(function() {
  $('.header_hamburger').click(function(){
    if ($('.sidebar').hasClass('active')){
      $('.sidebar').removeClass('active');
      $('body').removeClass('ov-hid');
    } else{
      $('.sidebar').addClass('active');
      $('body').addClass('ov-hid');
    }
  });
});

/*Заголовок картинки выводится из атрибута*/

$(document).ready(function(){
  newsImg = $(".article img");
  newsImg.after(function(){
    imgTitle = $(this).attr("title");
    if (imgTitle) return "<div class='article_img_info'>"+imgTitle+"</div>";
  });
});

/*Маска номера телефона*/

$(function(){
  if($('input').is('.phone')){
    $(".phone").mask("+7 (999) 999-99-99");
  }
});