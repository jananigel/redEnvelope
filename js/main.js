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
	$('.main-pic').fadeIn('slow' , function(){
		$('.pull-left').fadeIn('slow');
		$('.pull-right').fadeIn('slow', function(){
			$('.content').fadeIn('slow' , function(){
				$('.bottom').fadeIn('slow' , function(){
					_footerImgW = (($('.footer').width() / 2) - 10) * -1;
					$('.footer').css({
						marginLeft: _footerImgW
					});
				});
			});
		});
	})
})

$(window).resize(function(){
	_footerImgW = (($('.footer').width() / 2) - 10 ) * -1;
	$('.footer').css({
		marginLeft: _footerImgW
	});
})