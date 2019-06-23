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