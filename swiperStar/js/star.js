var swiper1=new Swiper('.swiper1',{
    speed:600,
    parallax:true,
    direction:'vertical',
    pagination:{
      el:'.swiper-pagination',
      clickable:true,
    },
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev'
    },
    mousewheel:true,
    keyboard:{
      enabled:true
    }
});//swiper기본 세팅

//백그라운드 색상을 배열에 저장
var bgArray=['#25064c;','#36175e','#553285','#7b52ab'];

//슬라이드가 전환(change)될때 이벤트
swiper1.on('slideChange',function(){
  //console.log('페이지 전환됨.');
  //페이지 전환시 문구 사라짐
  $('.swiper-button-next').removeClass('bounce').find('strong').remove();

  var activeIndex=swiper1.activeIndex;
  console.log("현제페이지",activeIndex);
  //기본 배경 색상
  var bg="25064c";
  //백그라운드 색상을 페이지가 변경될때마다 변경처리
  // switch (activeIndex) {
  //   case 0: bg=bgArray[0]; break;
  //   case 1: bg=bgArray[1]; break;
  //   case 2: bg=bgArray[2]; break;
  //   case 3: bg=bgArray[3]; break;
  // }
$('.parallax-bg').css('background',bg)
$('.parallax-bg').css('background',bgArray[activeIndex])
//슬라이드 전환시 별이이동
 starMove();
});

//처음에 한번 실행하는 코드 작성(별 만들기)
var starLength=400;
for(var i=0; i<starLength; i++){
  if(i%2==0){//짝수번째
    $('.parallax-bg').append('<i class="fa fa-star" aria-hidden="true"></i>');
  }else{//홀수번째
      $('.parallax-bg').append('<i class="fa fa-star-o" aria-hidden="true"></i>');
  }
}
console.log('별의수=',starLength);
//함수호출(한번호출)
starMove();

//리사이징
$(window).resize(function(){
  starMove();

})

//별 이동하기
function starMove(){
  for(var i=0; i<starLength; i++){
    //별이 이동할 수 있는 최대
    var maxX=$('.parallax-bg').width();
    var maxY=$('.parallax-bg').height();
    // console.log(maxX,maxY);

    //별이 이동되는 위치값을 랜덤으로구하기(소수점버림)
    var x=Math.floor(Math.random()*maxX);
    var y=Math.floor(Math.random()*maxY);
    //별의 색깔 랜덤으로 구하기(소수점올림)
    //알록달록별
    // var r=Math.round(Math.random()*255);
    // var g=Math.round(Math.random()*255);
    // var b=Math.round(Math.random()*255);
    //노란별
    var r=255;
    var g=Math.round(Math.random()*41)+214;
    var b=Math.round(Math.random()*255);
    //별의크기
    var size=Math.round(Math.random()*10)+5;
    console.log(x,y);
    $('.parallax-bg i').eq(i).css({
      'left':x,
      'top':y,
      'color':'rgb('+r+','+g+','+b+')',
      'fontsize': size
    });

  }
}
