
$(document).ready(function(){

	//Code to center the subscription pup-up box
	$box = $('#box');
	$box.css({
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$box.width()/2 + 'px',
		'margin-top' : -$box.height()/2 + 'px'
	});


	//Subscription pup-up
	$('.start_btn').click(function(){
		$('#lightbox').width($(window).width()).height($(window).height()).fadeIn(200);
		$('#box').fadeIn(200);

		return false;
	});

	$('#lightbox, .close').click(function(){
		$('#lightbox').width(0).height(0).fadeOut(200);
		$('#box').fadeOut(200);

		return false;
	});

	//동영상 제어
	var player=$('video')[0];
	console.log(player);
	//재생
	$('#btn-play-pause').on('click',function(){
		if(player.paused){
			player.play();
			$(this).find('i').text('pause');
			$(this).attr('title','재생')
		}else{
			player.pause();
			$(this).find('i').text('play_arrow');
			$(this).attr('title','재생')
		}
	})
	//다시재생
	$('#btn-replay').on('click',function(){
		player.pause();
		player.currentTime=0;//재생시간 초기화
		player.play();
	})
	//음소거
	$('#btn-volume').on('click',function(){
		//console.log(player.muted);
		if(player.muted){//음소거상태
			$(this).find('i').text('volume_up');
			$(this).attr('title','음소거해제');
			player.muted=false;
		}else{
			$(this).find('i').text('volume_off');
			$(this).attr('title','음소거');
			player.muted=true;
		}
	})
	$('#btn-fullscreen').on('click',function(){
		if($(this).find('i').text()=='fullscreen'){
			$(this).find('i').text('fullscreen_exit');
			$(this).attr('title','기본화면');
			$('body').addClass('fullscreen')
		}else{
			$(this).find('i').text('fullscreen');
			$(this).attr('title','풀스크린');
			$('body').removeClass('fullscreen')
		}
	})






});
