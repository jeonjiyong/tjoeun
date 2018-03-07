$(function(){
  var $devWidth
  var $limitsize=767;
 // 모바일 화면일때 스와이퍼
 var mySwiper = new Swiper ('.swiper-container', {
  slidesPerView:4,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
 $(window).resize(function(){
   var $devWidth=$('body').width();
    if ($devWidth < $limitsize) {
      var mySwiper = new Swiper ('.swiper-container', {
       slidesPerView:2,
       loop: true,
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
    autoplay: {
    delay: 1000,
      },
     })
   }
   else{
     var mySwiper = new Swiper ('.swiper-container', {
      slidesPerView:4,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
   }
 })
// 로그인 팝업 활성화
 $('.btn-login').click(function(){
   var $devWidth=$('body').width();
   if ($devWidth > $limitsize) {
     $('.login-popup').show();


   }
   if ($devWidth < $limitsize) {
     $('.login-popup').show();
     $('.kk').addClass('bg-on')
   }
 })
 $('#btn-cancel').click(function(){
   var $devWidth=$('body').width();
   if ($devWidth > $limitsize) {
     $('.login-popup').hide();

   }
   if ($devWidth < $limitsize) {
     $('.login-popup').hide();
     $('.kk').removeClass('bg-on')
   }
 })
//nav 목록 활성화
$('.gnb-menu > ul > li > a').click(function(e){
  e.preventDefault();
  var $devWidth=$('body').width();
  if ($devWidth > $limitsize) {
    $(this).next('ul').slideToggle(500);
    $(this).toggleClass('on');
  }
  if ($devWidth < $limitsize){
      e.preventDefault();
    $(this).next('ul').slideToggle(500);
    $(this).toggleClass('on');
  }
})
$('.m-btn').click(function(e){
  $('.m-btn i').toggleClass('fa-times fa-bars')
  e.preventDefault();
  var $devWidth=$('body').width();
    if ($devWidth < $limitsize) {
      $('.gnb-menu').toggleClass('move');
      $('.kk').toggleClass('bg-on2')
    }
})
// 검색버튼 활성화
$('.btn-search').click(function(){
  $('.search').show();
  var $devWidth=$('body').width();
  if ($devWidth < $limitsize) {
    $('.btn-search').hide();
  }
})
$('.btn-x').click(function(){
  $('.search').hide();
  var $devWidth=$('body').width();
  if ($devWidth < $limitsize) {
    $('.btn-search').show();
  }
})





































































})
