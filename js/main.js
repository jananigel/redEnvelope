$(function(){
	/*$('.headerMenuBtn').click(function(e){
		$('.headerMenu').fadeToggle();
		e.stopPropagation();
	});
	$('.mainPic').click(function(){
		$(this).fadeOut('slow',function(){
			$('.testPic').fadeIn()
		});
	});
	$(document).click(function(e){
		$('.headerMenu').fadeOut();
		e.stopPropagation();
	});*/
	_imgName = "";
	_footerImgW = 0;

	_footerImgW = (($('.footer').width() / 2)-50) * -1;
	$('.footer').css({
		marginLeft: _footerImgW
	});

	$('a.redEnv').click(function(){
		$('.modal-body img').attr('src', 'img/src/' + $(this).children('img').attr('src').substr(4));
		_imgName = 'img/src/' + $(this).children('img').attr('src').substr(4);
	});

	$('.btn-download').click(function(){
		console.log($("<a>").attr("href", _imgName));
		//$("<a>").attr("href", _imgName).attr("download", "img.png").appendTo("body").click().remove();
		var a = $("<a></a>").attr("href", _imgName).attr("download", _imgName.substr(8)).appendTo("body");
	    a[0].click();
	    a.remove();
	});
	
	$('.main-pic').click(function(){
		$('.modal-body img').attr('src', 'img/src/tutorial.png');
		_imgName = 'img/src/tutorial.png';
	});
	$('img.main-pic').load(function(){
		$('.main-pic').fadeIn('500');
		$('.pull-left').delay('500').fadeIn('500');
		$('.pull-right').delay('1000').fadeIn('500');
		$('.content').delay('1500').fadeIn('500');
		$('.bottom-left,.bottom-right').delay('2000').fadeIn('500');
		$('.bottom').delay('2000').animate({
			opacity: 1
		}, 500 , function(){

		});
	});
	
});

$(window).resize(function(){
	_footerImgW = (($('.footer').width() / 2)-50 ) * -1;
	$('.footer').css({
		marginLeft: _footerImgW
	});
});
