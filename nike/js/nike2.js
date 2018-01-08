$(function(){

  $('img').click(function(){
    //내가 클릭한 이미지와 경로와 제품명을 변수에 저장한다
    var name=$(this).attr('alt');
    var src=$(this).attr('src');
    //변수와 값을 popup에 각위치에 저장
    $('#popup h3').text(name);
    $('#popup img').attr({
        'src':src,
        'alt':name
    });
    $('#popup').fadeIn();
    // console.log(name, src)
  })

  $('#men .contents').click(function(){

      var name=$(this).prev().attr('alt');
      var src=$(this).prev().attr('src');

      //console.log(name, src);
      $('#popup h3').text(name);
      $('#popup img').attr({
          'src':src,
          'alt':name
      });
      $('#popup').fadeIn();

  })

    //팝업 닫기
    $('#close').click(function(){
      $('#popup').fadeOut();
    })

    //스크롤을 하단으로 일정길이만큼 이동시에 위로가기버튼 활성화

    $(window).scroll(function(){
      var windowscroll=$(window).scrollTop();
      //console.log(windowscroll);
        if(windowscroll > 100){
          $('#goTop').addClass('on')
        }else{
          $('#goTop').removeClass('on')
        }
    }).scroll();
    //위로가기버튼클릭 상단이동
    $('goTop').click(function(){
        $('html, body').animate({
          scrollTop:0
        },1000)
    })

    //네비게이션 메뉴 클릭시 해당위치로 이동처리

    $('nav ul li a').click(function(){
      $('nav ul li a').removeClass('active');
      $(this).addClass('active');

      //해당위치처리
      var href=$(this).attr('href');
      // console.log(href);
      //부드러운스크롤
        $('html, body').animate({
          scrollTop:($(href).offset().top)
        },1000)



    })










})
