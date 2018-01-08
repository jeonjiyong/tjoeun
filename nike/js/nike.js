// 문서가 로딩된 후 실행
$(function(){
  //팝업열기
  $('img').click(function(){
    // alert('이미지가 클릭되었습니다.')

    // 내가 클릭한 이미지의 경로와 제품명을 변수에 저장한다.
    var name=$(this).attr('alt');
    var src=$(this).attr('src');

    //변수의 값을 팝업의 각 위치에 저장한다.
    $('#popup h3').text(name);
    $('#popup img').attr({
      'src':src,
      'alt':name
    });
    $('#popup').fadeIn();
    //console.log(name, src);
  })

  //Men에 있는 이미지를 클릭했을 때 팝업 띄우기
  $('#men .contents').click(function(){
    var src=$(this).prev().attr('src');
    var name=$(this).prev().attr('alt');
    //console.log(src, name)
    $('#popup h3').text(name);
    $('#popup img').attr({
      'src':src,
      'alt':name
    });
    $('#popup').fadeIn();
  })

  //팝업 닫기(닫기버튼, 팝업백그라운드 클릭시)
  $('#close, #popup').click(function(){
   $('#popup').fadeOut();
  })

//스크롤을 하단으로 일정길이만큼 이동시에 위로가기버튼 활성화
  $(window).scroll(function(){

    //스크롤의 위치
    var windowTop=$(window).scrollTop();
    //console.log(windowTop);

    if(windowTop > 100){
      $('#goTop').addClass('on')
    }else{
      $('#goTop').removeClass('on')
    }
  }).scroll();

//위로가기버튼클릭시 스크롤이 상단으로 이동

  $('#goTop').click(function(){
    $('html,body').animate({
      scrollTop:0
    }, 1000)
  })


//네비게이션 메뉴 클릭시 해당 위치로 이동처리

  $('nav ul li a').click(function(){
    //메뉴활성화위치 변경
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');

    //$('nav ul li a')=>네비게이션메뉴 전체
    //$(this)=>내가 선택한 네비게이션메뉴

    //클릭할 때마다 해당 메뉴의 아이디의 값을 구함.
    var href=$(this).attr('href');
    console.log(href);
    $('html, body').stop().animate({
      scrollTop:($(href).offset().top)
    },1000)
    //$(선택자).offset(),top=>해당 요소의 위쪽 좌표값 반환
  })


      //슬라이드 이미지
      var i=0; //증가 감소를 위한 인덱스 변수
      //이전버튼을 눌렀을 때
      $('.prev').click(function(){
        i--;//감소
        console.log(i);
        if(i<0){
          i=3;//최대값으로 변경
          $('#msg').text('마지막이미지로 이동').fadeIn(2000).fadeOut();
        }
        $('.slide-contents ul').animate({
          'left':-(i*260)
        }, 1000)
      })
      //다음버튼을 눌렀을 때
      $('.next').click(function(){
        i++;//증가
        console.log(i);
        if(i>3){
          i=0;//최소값으로 변경
          $('#msg').text('첫이미지로 이동').fadeIn(2000).fadeOut();
        }
        $('.slide-contents ul').animate({
          'left':-(i*260)
        }, 1000)
      })






})//종료
